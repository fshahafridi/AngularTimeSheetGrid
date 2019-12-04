# Angular custom Grid implemention for TimeSheet

The sample application works as per the following specifications.

State – Active or Submitted (read only)

By default when a timesheet is created it is put into the Active state and is editable
It gets changed to Submitted by the user selecting the timesheet row and clicking the [Submit] button at which point the timesheet becomes read-only

Title – free text description of the task performed

Type – Select list with the following options: Telephone Call, Research and Drafting Document

Duration – used to record the time spent on the task.Users should be able to enter time in the format h:mm

Hourly Rate – used to store the hourly rate charged out for the task (by default this should take on the value specified in “Default Hourly Rate”

Total – Total charge for the timesheet (read-only calculated field). This is calculated by:

Hourly Rate * Duration rounded up to the nearest 15 minutes
E.g. for Duration 2:10 this would be rounded up to 2:15
E.g. for Duration 2:15 this would stay as 2:15
E.g. for Duration 3:05 this would be rounded up to 3:15
 

Clicking on the [New] button will add a new editable row at the top of the grid and default the hourly rate to the rate specified in “Default Hourly Rate”

Clicking on [Save] will create the new timesheet row making the State ‘Active’

Clicking on [Cancel] will remove the new row

Clicking on [Submit] will change the state of the selected rows in the grid to “Submitted”, submitted rows are read only

Clicking on [Edit] will change the row into edit mode where the user can update: Title, Type, Duration, Hourly Rate

Clicking on [Delete] will prompt the user with ‘Are you sure you want to delete this timesheet entry?’ before removing the row
## Tools and Technologies Used
*	Angular 7.2, Node.JS and Type Script 3.1 for single page application
* Bootstrap for responsive design
* Angular CLI 7.0.3
* Primeng Dropdown and Confimation Dialog
## Architectural pattern
*	Container and Presentational or Model-View-Presenter design pattern
* Muliti Modules
