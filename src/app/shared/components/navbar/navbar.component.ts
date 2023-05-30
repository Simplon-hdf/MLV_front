import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  dropdownPopoverShow = false;
  @ViewChild('btnDropdownRef', { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild('popoverDropdownRef', { static: false })
  popoverDropdownRef?: ElementRef;

  // menu burger et menu déroulant de espace jeunes
  ngOnInit() {
    console.log('ngOnInit() called');
    const burgerButton = document.querySelector(
      '[data-collapse-toggle="navbar-dropdown"]'
    );
    const navbarDropdown = document.getElementById('navbar-dropdown');
    burgerButton?.addEventListener('click', () => {
      navbarDropdown?.classList.toggle('hidden');
    });
  }

  // Inversion de dropdownPopoverShow
  toggleDropdown(event: any) {
    console.log('toggleDropdown() clicked');
    event.preventDefault();   
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }


  @HostListener('window:click', ['$event'])
  // masque le menu déroulant de espace jeunes
  onWindowClick(event: MouseEvent){
    const target = event.target as HTMLElement;
    const dropdownButton = this.btnDropdownRef.nativeElement as HTMLElement;
    const dropdownContent = this.popoverDropdownRef?.nativeElement as HTMLElement;
    if(!dropdownButton.contains(target) && !dropdownContent.contains(target)){
      this.dropdownPopoverShow = false;
    }
  }
}
