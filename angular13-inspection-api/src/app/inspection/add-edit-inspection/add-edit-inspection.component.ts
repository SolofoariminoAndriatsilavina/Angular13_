//Nampiana io Input io
import { Component, Input, OnInit } from '@angular/core';
// Modification nataoko début
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';
// Modification nataoko fin

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styleUrls: ['./add-edit-inspection.component.css'],
})
export class AddEditInspectionComponent implements OnInit {
  //constructor() { } par défaut

  // Modification nataoko début
  inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;

  constructor(private service: InspectionApiService) {}

  @Input() inspection: any;
  id: number = 0;
  status: string = '';
  comments: string = '';
  inspectionTypeId!: number;

  // Modification nataoko fin

  ngOnInit(): void {
    // Modification nataoko début
    this.id = this.inspection.id;
    this.status = this.inspection.status;
    this.comments = this.inspection.comments;
    this.inspectionTypeId = this.inspectionTypeId;
    this.statusList$ = this.service.getStatusList();
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
    // Modification nataoko fin
  }

  // Modification nataoko début
  addInspection() {}

  updateInspection() {}
  // Modification nataoko fin
}
