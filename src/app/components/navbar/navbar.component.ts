import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('btn') closeBtn: ElementRef | undefined;
  @ViewChild('sidebar') sidebar: ElementRef | undefined;

  closeBtnClick(){
    this.sidebar?.nativeElement.classList.toggle("open");
    this.menuBtnChange();
  }

  searchBtnClick(){
    this.sidebar?.nativeElement.classList.toggle("open");
    this.menuBtnChange();
  }

  menuBtnChange() {
    console.log(this.sidebar?.nativeElement.classList.contains("open"));
    if(this.sidebar?.nativeElement.classList.contains("open")){
      this.closeBtn?.nativeElement.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    }else {
      this.closeBtn?.nativeElement.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
  }

}



