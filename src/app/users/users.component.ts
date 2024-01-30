import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from "@angular/common/http";
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  showForm: boolean = false;
  showUpdateForm: boolean = false;
  userForm: FormGroup | undefined;
  updateUserForm: FormGroup | undefined;
  selectedUserId: number | undefined;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getUsers();
    this.userForm = this.formBuilder.group({
      nomUtilisateur: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      roleDutilisateur: ['', Validators.required],
      InformationsPersonalises: ['', Validators.required]
    });

    this.updateUserForm = this.formBuilder.group({
      nomUtilisateur: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      roleDutilisateur: ['', Validators.required],
      InformationsPersonalises: ['', Validators.required]
    });
  }

  public getUsers() {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public toggleForm() {
    this.showForm = !this.showForm;
    this.showUpdateForm = false;
  }

  public toggleUpdateForm(userId: number) {
    this.selectedUserId = userId;
    this.showUpdateForm = true;

    // Fetch the user details by ID and populate the update form
    this.userService.getUser(userId).subscribe(
      (user: User) => {
        this.updateUserForm?.setValue(user);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addUser(): void {
    this.userService.addUser(this.userForm?.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
        this.toggleForm();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updateUser(): void {
    if (this.selectedUserId) {
      const updatedUser: User = { utilisateurId: this.selectedUserId, ...this.updateUserForm?.value };

      this.userService.updateUser(updatedUser).subscribe(
        (response: User) => {
          console.log(response);
          this.getUsers();
          this.showUpdateForm = false;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  public deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
