import { Component , ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss']
})
export class SidenavComponent {
	title = 'Sidenav';
	shouldRun =  true;
	events: string[] = [];
    opened: boolean;
	ngOnInit(){
	}
}
 
    
