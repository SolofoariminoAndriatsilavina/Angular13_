import { Injectable } from '@angular/core';
// Modification nataoko début
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modification nataoko fin

@Injectable({
  providedIn: 'root',
})
export class InspectionApiService {
  // constructor() {} par défaut
  // Modification nataoko début
  readonly inspectionAPIUrl = 'https://localhost:7097/api';

  constructor(private http: HttpClient) {}

  //Inspection
  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspections');
  }

  addInspection(data: any) {
    return this.http.post(this.inspectionAPIUrl + '/inspections', data);
  }

  updateInspection(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + '/inspections/${id}', data);
  }

  deleteInspection(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + '/inspections/${id}');
  }

  //InspectionType
  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectionTypes');
  }

  addInspectionTypes(data: any) {
    return this.http.post(this.inspectionAPIUrl + '/inspectionTypes', data);
  }

  updateInspectionTypes(id: number | string, data: any) {
    return this.http.put(
      this.inspectionAPIUrl + '/inspectionTypes/${id}',
      data
    );
  }

  deleteInspectionTypes(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + '/inspectionTypes/${id}');
  }

  //Statuses
  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/status');
  }

  addStatus(data: any) {
    return this.http.post(this.inspectionAPIUrl + '/status', data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + '/status/${id}', data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + '/status/${id}');
  }

  // Modification nataoko fin
}
