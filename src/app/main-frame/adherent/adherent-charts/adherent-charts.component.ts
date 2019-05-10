import { Component, OnInit, Input } from "@angular/core";
import { Adherent, AdherentsDTO } from "../../../shared/dto/adherent";
import { Gender } from "../../../shared/enum/gender.enum";
import { ChartService } from "../../../core/chart/service/chart.service";
import { LoggerService } from "../../../core/logger/logger.service";
import { DateUtil } from "../../../util/date-util";
import { ArrayUtil } from "../../../util/array-util";

@Component({
  selector: "dmab-adherent-charts",
  templateUrl: "./adherent-charts.component.html",
  styleUrls: ["./adherent-charts.component.scss"]
})
export class AdherentChartsComponent implements OnInit {
  @Input()
  adherents: Array<Adherent>;

  adherentsDTO: AdherentsDTO;
  dataLoaded: boolean;
  dataChartGender: any;
  dataChartAge: any;
  labelChartAge: string[];
  valueChartAge: number[];

  constructor(
    private chartService: ChartService,
    private logger: LoggerService
  ) {
    this.initChart();
  }

  ngOnInit() {
    if (this.adherents != null) {
      this.adherentsDTO = new AdherentsDTO(this.adherents);
      this.pickColorSet();
      this.populateCharts();
    }
  }

  initChart() {
    this.dataChartGender = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: ["red", "blue", "yellow", "brown"]
        }
      ]
    };
    this.dataChartAge = {
      labels: [],
      datasets: [
        {
          label: "Age",
          backgroundColor: "blue",
          borderColor: "black",
          data: []
        }
      ]
    };
  }

  pickColorSet() {
    this.dataChartGender.datasets[0].backgroundColor = this.chartService.colorSet5;
    this.dataChartAge.datasets[0].backgroundColor = this.chartService.colorSet4[0];
  }

  populateCharts() {
    this.populateGender();
    this.populateChartAge();
  }

  populateGender() {
    const genderLabels = [Gender.Homme, Gender.Femme, Gender.NonBinaire];
    this.dataChartGender.labels = genderLabels;
    this.dataChartGender.datasets[0].data = this.adherentsDTO.getOccurenceByGender();
  }

  populateChartAge() {
    this.labelChartAge = new Array();
    this.valueChartAge = new Array();
    this.adherentsDTO.getOccurenceByAge().forEach((element, key) => {
      this.labelChartAge.push(key);
      this.valueChartAge.push(element);
    });
    this.dataChartAge.labels = this.labelChartAge;
    this.dataChartAge.datasets[0].data = this.valueChartAge;
  }
}
