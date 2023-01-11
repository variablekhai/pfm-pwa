import { Component, Input } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {

  closeResult = '';
  data: any;

  @Input() category: any;
  @Input() amount: any;
  @Input() date: any;
  @Input() description: any;

  constructor(private expenseService: ExpenseService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllExpenses();
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  }

  addExpenseOnClick() {
    //use the service to add the expense and dismiss the modal
    this.expenseService.addExpense(this.category, this.amount, this.date, this.description)
      .subscribe(res => {
        console.log(res);
      });
     this.modalService.dismissAll();
  }

  getAllExpenses() {
    this.expenseService.getExpenses()
      .subscribe(data => {
        this.data = data;
      });
  }

}
