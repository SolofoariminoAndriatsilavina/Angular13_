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
    this.inspectionTypeId = this.inspection.inspectionTypeId;
    this.statusList$ = this.service.getStatusList();
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
    // Modification nataoko fin
  }

  // Modification nataoko début
  addInspection() {
    var inspection = {
      status: this.status,
      comments: this.comments,
      inspectionTypeId: this.inspectionTypeId,
    };
    this.service.addInspection(inspection).subscribe((res) => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = 'block';
      }

      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = 'none';
        }
      }, 4000);
    });
  }

  updateInspection() {
    var inspection = {
      id: this.id,
      status: this.status,
      comments: this.comments,
      inspectionTypeId: this.inspectionTypeId,
    };

    var idd: number = this.id;
    // alert(inspection.status);
    this.service.updateInspection(idd, inspection).subscribe((ress) => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');

      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = 'block';
      }

      setTimeout(function () {
        if (showUpdateSuccess) {
          showUpdateSuccess.style.display = 'none';
        }
      }, 4000);
    });
  }
  // Modification nataoko fin
}
