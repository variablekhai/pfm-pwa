import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { map, reduce, tap } from 'rxjs';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  hierarchy: any = ['Medical', 'Food', 'Entertainment', 'Shopping', 'Others'];

  doughnutChart: any;
  data: any;
  chartData: any = [];
  totalExpenses: any;

  constructor(private expenseService: ExpenseService) { }
  
  ngOnInit(): void {
    
    this.expenseService.getExpensesData()
      .subscribe((data) => {

        this.chartData = data;

        this.doughnutChart = new Chart('tracker', {
          type: 'doughnut',
          data: {
            labels: ['Medical', 'Food', 'Entertainment', 'Shopping', 'Others'],
            datasets: [{
              label: 'Expenses',
              data: this.chartData ? this.chartData : [0,0,0,0,0],
              backgroundColor: [
                '#E42C6A', //Magenta
                '#FDD12C',  //Yellow
                '#E56A1F', //Orange
                '#3EB750', //Green
                '#3778C2', //Blue
                '#E12B38' //Red
              ],
              borderWidth: 0,
            }],
          },
          options: {
            cutout: '70%',
            plugins: {
              legend: {
                position: 'bottom',
              },
            },
          },
          plugins: [{
            id: 'my-doughnut-text-plugin',
                afterDraw: function (chart, options) {
                    
                    const data = chart.config.data.datasets[0].data;
                    const dataArr = data.map((item: any) => Number.parseFloat(item));
                    const total = dataArr.reduce((a: any, b: any) => a + b, 0);
                    
                    let theCenterText = "RM" + total.toFixed(2);
                    const fontSz = Math.floor( 300 * 0.10 ) ;
                    chart.ctx.textBaseline = 'middle';
                    chart.ctx.textAlign = 'center';
                    chart.ctx.font = fontSz+'px Poppins';
                    chart.ctx.fillText(theCenterText, 300/2, 300/2.1 -20 )
                }
          }]    
        });
      });
    
  }

}
