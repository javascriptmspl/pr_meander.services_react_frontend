import React from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import DatePicker from "react-datepicker";
import { Modal } from 'react-bootstrap';


class Calendar extends React.Component {

	state = {
		startDate: new Date(),
		show: false,
		iseditdelete : false,
		addneweventobj:null,
		isnewevent:false,
		event_title:"",
		category_color:'',
		weekendsVisible: true,
		currentEvents: [],
		defaultEvents :  [{
			title: 'Event Name 4',
			start: Date.now() + 148000000,
			className: 'bg-purple'
		},
		{
			title: 'Test Event 1',
			start: Date.now(),
			end: Date.now(),
			className: 'bg-success'
		},
		{
			title: 'Test Event 2',
			start: Date.now() + 168000000,
			className: 'bg-info'
		},
		{
			title: 'Test Event 3',
			start: Date.now() + 338000000,
			className: 'bg-primary'
		}]
	}

	handleChange = date => {
		this.setState({
		  	startDate: date
		});
	};

	handleClose = () => {
        this.setState({
			isnewevent : false,
			iseditdelete : false,
			show: false
        });
    }

	handleEventClick = (clickInfo) => {    
		this.setState({
		  iseditdelete : true,
		  event_title : clickInfo.event.title,
		  calenderevent : clickInfo.event
		})    
    }

	handleDateSelect = (selectInfo) => {
		this.setState({
		  isnewevent : true,
		  addneweventobj : selectInfo
		}) 
		
	}

	addnewevent(){
		const{event_title,category_color,addneweventobj } = this.state
		let calendarApi = addneweventobj.view.calendar

		calendarApi.unselect() // clear date selection

		if (event_title) {
			calendarApi.addEvent({
			id: 10,
			title : event_title,
			className: category_color,
			start: addneweventobj.startStr,
			end: addneweventobj.endStr,
			allDay: addneweventobj.allDay
			})
		}   
		this.setState({isnewevent : false})
	}

	onupdateModalClose() {
		this.setState({
			iseditdelete : false,
			event_title :""
		})  
	}

	oncreateeventModalClose() {
		this.setState({
			isnewevent : false,
			event_title :""
		})
	}

	handleEventClick = (clickInfo) => {    
	this.setState({
		iseditdelete : true,
		event_title : clickInfo.event.title,
		calenderevent : clickInfo.event
	})    
	}

	removeevent(){
		const{ calenderevent } = this.state
		calenderevent.remove()
		this.setState({iseditdelete : false})
	}

	clickupdateevent(){
		const{defaultEvents,calenderevent,event_title } = this.state
		const newArray = defaultEvents
		for(let i=0;i<newArray.length;i++) {
			if(newArray[i].id === parseInt(calenderevent.id)){
				newArray[i].title = event_title
			}
		}

		this.setState({defaultEvents : newArray, iseditdelete:false})

	}
	
	handleClick(){
		this.setState({
			show: true
		});
	}
	
    render() {
		
		const { defaultEvents,iseditdelete,isnewevent } = this.state;

        return (
			<div>
				{/* Breadcrumb */}
				<div className="breadcrumb-bar">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><a href="/home">Home</a></li>
										<li className="breadcrumb-item active" aria-current="page">Calendar</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Calendar</h2>
							</div>
							<div className="col-auto text-right float-right ml-auto">
								<a href="#0" className="btn btn-primary btn-sm"  onClick={() => this.handleClick()}>Create Event</a>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<div className="card">
									<div className="card-header">
										<h4 className="card-title mb-0">Drag & Drop Event</h4>
									</div>
									<div className="card-body">
										<div id="calendar-events" className="mb-3">
											<div className="calendar-events"><i className='fas fa-circle text-info' /> My Event One</div>
											<div className="calendar-events"><i className='fas fa-circle text-success' /> My Event Two</div>
											<div className="calendar-events"><i className='fas fa-circle text-danger' /> My Event Three</div>
											<div className="calendar-events"><i className='fas fa-circle text-warning' /> My Event Four</div>
										</div>
										<div className="checkbox mb-3">
											<input id="drop-remove" type="checkbox" />
											<label htmlFor="drop-remove">
												Remove after drop
											</label>
										</div>
										<a href="#0" data-toggle="modal" data-target="#add_new_event" className="btn btn-primary btn-block">
										<i className='fas fa-plus' /> Add Category
										</a>
									</div>
								</div>
							</div>

							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="card">
									<div className="card-body">
										<div className="row">
											<div className="col-md-12">
												{/* Calendar */}
												<FullCalendar
													plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
													headerToolbar={{
														left: 'prev,next today',
														center: 'title',
														right: 'dayGridMonth,timeGridWeek,timeGridDay',
													}}
													
													initialView='dayGridMonth'
													editable={true}
													selectable={true}
													selectMirror={true}
													dayMaxEvents={true}
													weekends={this.state.weekendsVisible}
													initialEvents={defaultEvents}
													select={this.handleDateSelect}
													eventClick={clickInfo=>this.handleEventClick(clickInfo)}
												/>
												{/* /Calendar */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>		
				{/* Page Content */}

				{/* Add Event Modal */}
				<div id="add_event" className="modal custom-modal fade" role="dialog">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Add Event</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label>Event Name <span className="text-danger">*</span></label>
										<input className="form-control" type="text" />
									</div>
									<div className="form-group">
										<label>Event Date <span className="text-danger">*</span></label>
										<div className="cal-icon">
										<input className="form-control datetimepicker" type="text" />
										</div>
									</div>
									<div className="form-group">
										<label className="control-label">Category</label>
										<select className="select form-control">
										<option>Danger</option>
										<option>Success</option>
										<option>Purple</option>
										<option>Primary</option>
										<option>Pink</option>
										<option>Info</option>
										<option>Inverse</option>
										<option>Orange</option>
										<option>Brown</option>
										<option>Teal</option>
										<option>Warning</option>
										</select>
									</div>
									<div className="submit-section">
										<button className="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* /Add Event Modal */}

				 {/* Add Event Modal */}
				 <div className="modal custom-modal fade none-border" id="my_event">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
							<h4 className="modal-title">Add Event</h4>
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
							</div>
							<div className="modal-body" />
							<div className="modal-footer justify-content-center">
							<button type="button" className="btn btn-success save-event submit-btn">Create event</button>
							<button type="button" className="btn btn-danger delete-event submit-btn" data-dismiss="modal">Delete</button>
							</div>
						</div>
					</div>
				</div>
				{/* /Add Event Modal */}

				 {/* Add Category Modal */}
				 <div className="modal custom-modal fade" id="add_new_event">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
						<div className="modal-header">
						<h4 className="modal-title">Add Category</h4>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
						</div>
						<div className="modal-body">
						<form>
							<div className="form-group">
							<label>Category Name</label>
							<input className="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
							</div>
							<div className="form-group">
							<label>Choose Category Color</label>
							<select className="form-control form-white" data-placeholder="Choose a color..." name="category-color">
								<option value="success">Success</option>
								<option value="danger">Danger</option>
								<option value="info">Info</option>
								<option value="primary">Primary</option>
								<option value="warning">Warning</option>
								<option value="inverse">Inverse</option>
							</select>
							</div>
							<div className="submit-section text-center">
							<button type="button" className="btn btn-primary save-category submit-btn" data-dismiss="modal">Save</button>
							</div>
						</form>
						</div>
					</div>
					</div>
				</div>
      			{/* /Add Category Modal */}


				<Modal centered show={iseditdelete} onHide={this.handleClose}>
					<Modal.Header closeButton toggle={() => this.oncreateeventModalClose()}> 
						Add Event
					</Modal.Header>
					<Modal.Body>
						<label>Change event name</label>
						<div className='input-group'><input className='form-control' type="text" />
							<span className='input-group-append'>
								<button type='submit' className='btn btn-success'><i className='fa fa-check'></i> Save</button>
							</span>
						</div>						
					</Modal.Body>  
					<Modal.Footer>
					<button type="button" className="btn btn-danger submit-btn delete-event centered" 
							data-dismiss="modal" onClick={()=>this.removeevent()}>Delete</button>
					</Modal.Footer>            
				</Modal>

				<Modal centered show={isnewevent} onHide={this.handleClose}>
					<Modal.Header closeButton toggle={() => this.oncreateeventModalClose()}> 
						Add Event
					</Modal.Header>
					<Modal.Body>
							{this.renderaddnewevent()}
					</Modal.Body>  
					<Modal.Footer>
						<button type="button" className="btn btn-success submit-btn delete-event" data-dismiss="modal" onClick={()=>this.addnewevent()}>Create event</button>
					</Modal.Footer>           
				</Modal>

				<Modal show={this.state.show} onHide={this.handleClose} centered>
					<Modal.Header closeButton>
						<Modal.Title>Create Event</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<div className="form-group">
								<label>Event Name <span className="text-danger">*</span></label>
								<input className="form-control" type="text" />
							</div>
							<div className="form-group">
								<label>Event Date <span className="text-danger">*</span></label>
								<DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control datetimepicker"
                                />
							</div>
							<div className="submit-section">
								<button className="btn btn-primary submit-btn">Submit</button>
							</div>
						</form>
					</Modal.Body>
                </Modal>
				 

				
			</div>
        )
    }

	renderaddnewevent() {
		const{event_title} = this.state
			
		   return(
				<form>
					<div className='row'>
						<div className='col-md-12'>
							<div className='form-group'>
								<label className='control-label'>Event Name</label>
								<input className='form-control' type='text' name='title' value={event_title} 
									onChange={(event) => this.setState({ event_title: event.target.value })}/>
							</div>
						</div>
						<div className='col-md-12'>
							<div className='form-group'>
								<label className='control-label'>Category</label>
								<select className='select form-control' name='category'
								onChange={(event) => this.setState({ category_color: event.target.value })}>
									<option value='bg-danger'>Danger</option>
									<option value='bg-success'>Success</option>
									<option value='bg-purple'>Purple</option>
									<option value='bg-primary'>Primary</option>
									<option value='bg-pink'>Pink</option>
									<option value='bg-info'>Info</option>
									<option value='bg-inverse'>Inverse</option>
									<option value='bg-orange'>Orange</option>
									<option value='bg-brown'>Brown</option>
									<option value='bg-teal'>Teal</option>
									<option value='bg-warning'>Warning</option>
								</select>
							</div>
						</div>
					</div>
				</form>
		   )
	}
}
export default Calendar;