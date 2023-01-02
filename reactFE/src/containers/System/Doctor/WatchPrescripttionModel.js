import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import "./WatchPatientModel.scss";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { toast } from "react-toastify";
import ManagePatient from "./ManagePatient";
import { LANGUAGES, CommonUtils } from "../../../utils";
import DatePicker from "../../../components/Input/DatePicker";
import moment from "moment";
class WatchPrescripttionModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      updatedAt: "",
      date: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      patientReason: "",
      genders: "",
      truongNgu:''
   
    };
  }


  async componentDidMount() {
    if (this.props.dataModel) {
      this.setState({
        // email: this.props.dataModel.patientData.email,
        // date: this.props.dataPatient.updatedAt,
        // phoneNumber: this.props.dataPatient.phoneNumber,
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.dataModel !== this.props.dataModel) {
      this.setState({
        // email: this.props.dataModel.patientData.email,
      });
    }
  }
  handleOnChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSendRemedy = () => {
    this.props.sendRemedy(this.state);
  };


  handleOnclick = (item,truongNgu)=>{
console.log("item,",item,truongNgu)
alert("dasjdksah")
  }


  handleChangeTextArea = (event)=>{
    console.log(event.target.value)
  }
  
  render() {
    let { isOpenModal, closeRemedyClose, language, dataModel, Idtesst,dataIdShow  } = this.props;
    let {truongNgu} = this.state
    return (
      <>
        <Modal
          isOpen={isOpenModal}
          // toggle={}
          className={"booking-modal-container"}
          size="lg"
          style={{ width: "1500px" }}
          centered
        // backdrop={true}
        >
          <div className="modal-header">
            <h5 className="modal-title"> Form Thông tin Bệnh Nhân</h5>
            <button
              className="close"
              type="button"
              aria-label="Close"
              onClick={closeRemedyClose}
            >
              <span aria-hidden="true">x</span>
            </button>
          </div>
          <ModalBody style={{ height: "500px" }}>
            <div className="booking-modal-content">
              <div className="booking-modal-body">
                {/* {JSON.stringify(dataTime)} */}
                {dataModel &&
                  dataModel.length >= 0 &&
                  dataModel.map((item, index) => {
                    console.log("item",item)
                    let data = item.date;
                    data = moment(new Date()).format('dddd - DD/MM')
                    console.log("data Date", dataIdShow === item.patientId);
                    return (
                      <>

                        <div className="row" key={index} >
                          {dataIdShow === item.patientId ? <>
                            <div className="col-6 form-group">
                              <label>Họ Và Tên</label>
                              <input
                                className="form-control"
                                value={item.patientData.
                                  lastName}
                              // onChange={(event) =>
                              //   this.handleOnChangeInput(event, "fullName")
                              // }
                              />
                            </div>
                            <div className="col-6 form-group">
                              <label>SDT</label>
                              <input
                                className="form-control"
                                value={item.patientData
                                  .phoneNumber}
                              // onChange={(event) =>
                              //   this.handleOnChangeInput(event, "phoneNumber")
                              // }
                              />
                            </div>
                            <div className="col-6 form-group">
                              <label>Email</label>
                              <input
                                className="form-control"
                                value={item.patientData.email}
                              // onChange={(event) =>
                              //   this.handleOnChangeInput(event, "email")
                              // }
                              />
                            </div>
                            <div className="col-6 form-group">
                              <label>Địa Chỉ</label>
                              <input
                                className="form-control"
                                value={item.patientData.address}
                              // onChange={(event) =>
                              //   this.handleOnChangeInput(event, "address")
                              // }
                              />
                            </div>
                            {/* <p>test</p> */}
                            <div className="col-6 form-group">
                              <label>Lý Do Khám Bệnh :</label>
                              <input
                                className="form-control"
                                value={item.patientData.patientReason}
                              // onChange={(event) =>
                              //   this.handleOnChangeInput(event, "reason")
                              // }
                              />
                            </div>
                            <div className="col-6 form-group">
                              <label>Giới tính</label>
                              <input
                                // onChange={this.handleOnchangeDatePiker}
                                className="form-control"
                                value={item.patientData.genderData.valueVi}
                              // value={this.state.birthday}
                              // maxDate={this.disableDates()}
                              />
                            </div>
                            <div className="col-6 form-group">
                              <label>Ngày Đặt</label>
                              <input
                                className="form-control"
                                value={data}
                              // onChange={this.handleChangeSelect}
                              // options={this.state.genders}
                              />
                            </div>
                            <div className="col-6 form-group">
                              <label>Thời Gian khám :</label>
                              <input
                                className="form-control"
                                value={item.timeTypeDataPatient.valueEn}
                              // onChange={this.handleChangeSelect}
                              // options={this.state.genders}
                              />
                            </div>
                            <div className="col-12 form-group">
                              <label>Chuẩn đoán của bác sĩ:</label>
                           
                              <textarea rows="4" cols="50" onChange={(event)=>this.handleChangeTextArea(event)}      value={truongNgu}> </textarea>
                            </div>
                            <button className="col-4 btn btn-warning" color="warning" onClick={()=>this.handleOnclick(item,truongNgu)}>Send</button>
                          </> : <></>
                          }

                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={closeRemedyClose}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genders: state.admin.genders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchPrescripttionModel);
