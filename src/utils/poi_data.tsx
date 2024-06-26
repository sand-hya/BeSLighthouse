import { osspoiMaster, version_details } from "../dataStore";
import { fetchJsonReport } from "./fatch_json_report";

export class ProjectOfInterestData {
  public poi: any;

  updateDataPoi(key: string, items: any): void {
    this.poi = new Map<string, any>();
    this.poi.set(key, items);
  }

  getPoiData(key: string): any {
    try {
      return this.poi.get(key);
    } catch (e: any) {
      return [];
    }
  }

  async getJsonReportOsspoiMaster(): Promise<any> {
    return await fetchJsonReport(osspoiMaster);
  }

  async getJsonReportVersionSummary(
    besId: String,
    besName: string
  ): Promise<any> {
    return await fetchJsonReport(
      version_details + besId + "-" + besName + "-Versiondetails.json"
    );
  }
}

export const projectOfInterestData = new ProjectOfInterestData();
