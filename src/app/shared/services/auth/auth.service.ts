import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUser, LoginUser, User } from '../../models/user/user';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  login(userLogin: LoginUser): void {
    const listUsers: User[] = JSON.parse(localStorage.getItem('listUsers'));
    const userIndex = listUsers?.findIndex(user => user.username === userLogin.username)
    const user = listUsers?.find(user => user.username === userLogin.username)


    if (userIndex !== -1) {
      if (userLogin.password === user.password) {
        localStorage.setItem('userLogin', JSON.stringify(user));
        this.router.navigate(['/home'])
        this.dataService.isAuth$.next(true);
      }
    }
  }

  logout(): void {
    localStorage.removeItem('userLogin')
    this.router.navigate(['/login'])
  }

  createUser(newUser: CreateUser): void {
    const listUsers: User[] = JSON.parse(localStorage.getItem('listUsers')) || [];
    const userIndex = listUsers?.findIndex(user => user.username === newUser.username)

    if (userIndex === -1) {
      newUser.id = listUsers?.length + 1;
      listUsers.push(newUser as User)

      const userLogin: LoginUser = {
        username: newUser.username,
        password: newUser.password
      };


      setTimeout(() => {

        this.login(userLogin);
      }, 500);
    } else {
      alert('Cette utilisateur existe déjà')
    }

    localStorage.setItem('listUsers', JSON.stringify(listUsers))

  }

}
