import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
	selector: 'app-orbit-counts',
	templateUrl: './orbit-counts.component.html',
	styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

	types: string[] = [
		"Space Debris",
		"Communication",
		"Probe",
		"Positioning",
		"Space Station",
		"Telescope"
	]
	
	// typeCount: object[] = [
	// 	{
	// 		type: "Space Debris",
	// 		count: 0
	// 	},
	// 	{
	// 		type: "Communication",
	// 		count: 0
	// 	},
	// 	{
	// 		type: "Probe",
	// 		count: 0
	// 	},
	// 	{
	// 		type: "Positioning",
	// 		count: 0
	// 	},
	// 	{
	// 		type: "Space Station",
	// 		count: 0
	// 	},
	// 	{
	// 		type: "Telescope",
	// 		count: 0
	// 	}
	// ]

	constructor() { }

	ngOnInit() {
	}

	countByType(type: string): number {
		let count = 0;
		if (this.satellites) {
			for (let i = 0; i < this.satellites.length; i++) {
				if (this.satellites[i].type === type) {
					count++;
				}
			}
		}
		return count;
	}


}