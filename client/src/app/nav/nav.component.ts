import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  model: any = {}
  loggedIn = false;
  constructor(private accountService:AccountService,private router:Router){}
  ngOnInit(): void {
   
  }
  getCurrentUser(){
    this.accountService.currentUser$.subscribe({
      next:user=>this.loggedIn = !!user,
      error:error => console.log(error)
    })
  }
  login(){
    this.accountService.login(this.model).subscribe({
      next: response =>{
      this.router.navigateByUrl('/members');
        this.loggedIn = true;
      },
      error: error => console.log(error)
    })
  }
  logout(){
    this.loggedIn = false;

      this.accountService.logout();
    
    this.router.navigateByUrl('/');
  }
}
