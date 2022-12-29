import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import "./WatchPatientModel.scss";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { toast } from "react-toastify";
import ManagePatient from "./ManagePatient";
import { LANGUAGES, CommonUtils } from "../../../utils";
import DatePicker from "../../../components/Input/DatePicker";
class WatchPatientModel extends Component {
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
    };
  }
  // <td>{item.patientData.email}</td>
  // <td>{item.updatedAt}</td>
  // <td>{item.timeTypeDataPatient.valueEn} </td>
  // <td>{item.patientData.lastName}</td>
  // <td>{item.patientData.address}</td>
  // <td>{item.patientData.phoneNumber}</td>
  // <td>{item.patientData.patientReason}</td>
  // <td>{item.patientData.genderData.valueVi}</td>

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
    console.log("check datamodal", this.props.dataModel);
  }
  handleOnChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSendRemedy = () => {
    this.props.sendRemedy(this.state);
  };
  render() {
    let { isOpenModal, closeRemedyClose, language, dataModel } = this.props;
    console.log("check datamodal", this.props.dataModel);
    let { email } = this.state;
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
            {/* <table class="table table-sm table-dark">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Ngày đặt</th>
                  <th scope="col">Thời gian Khám</th>
                  <th scope="col">Họ và tên</th>
                  <th scope="col">Địa chỉ </th>
                  <th scope="col">SDT</th>
                  <th scope="col">Lý do</th>
                  <th scope="col">Giới tính</th>
                </tr>
              </thead>

              <tbody>
                {dataPatient &&
                  dataPatient.length > 0 &&
                  dataPatient.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.patientData.email}</td>
                        <td>{item.updatedAt}</td>
                        <td>{item.timeTypeDataPatient.valueEn} </td>
                        <td>{item.patientData.lastName}</td>
                        <td>{item.patientData.address}</td>
                        <td>{item.patientData.phoneNumber}</td>
                        <td>{item.patientData.patientReason}</td>
                        <td>{item.patientData.genderData.valueVi}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table> */}
            <div className="booking-modal-content">
              <div className="booking-modal-body">
                {/* {JSON.stringify(dataTime)} */}
                {dataModel &&
                  dataModel.length > 0 &&
                  dataModel.map((item, index) => {
                    return (
                      <>
                        <div className="row">
                          <div className="col-6 form-group">
                            <label>1</label>
                            <input
                              className="form-control"
                              value={this.state.fullName}
                              onChange={(event) =>
                                this.handleOnChangeInput(event, "fullName")
                              }
                            />
                          </div>
                          <div className="col-6 form-group">
                            <label>2</label>
                            <input
                              className="form-control"
                              value={this.state.phoneNumber}
                              onChange={(event) =>
                                this.handleOnChangeInput(event, "phoneNumber")
                              }
                            />
                          </div>
                          <div className="col-6 form-group">
                            <label>3</label>
                            <input
                              className="form-control"
                              value={item.patientData.email}
                              onChange={(event) =>
                                this.handleOnChangeInput(event, "email")
                              }
                            />
                          </div>
                          <div className="col-6 form-group">
                            <label>4</label>
                            <input
                              className="form-control"
                              value={this.props.dataPatient.address}
                              onChange={(event) =>
                                this.handleOnChangeInput(event, "address")
                              }
                            />
                          </div>
                          {/* <p>test</p> */}
                          <div className="col-12 form-group">
                            <label>5</label>
                            <input
                              className="form-control"
                              value={this.state.reason}
                              onChange={(event) =>
                                this.handleOnChangeInput(event, "reason")
                              }
                            />
                          </div>
                          <div className="col-6 form-group">
                            <label>6</label>
                            <DatePicker
                              // onChange={this.handleOnchangeDatePiker}
                              className="form-control"
                              // value={this.state.birthday}
                              // maxDate={this.disableDates()}
                            />
                          </div>
                          <div className="col-6 form-group">
                            <label>7</label>
                            <Select
                              value={this.state.selectedGender}
                              onChange={this.handleChangeSelect}
                              options={this.state.genders}
                            />
                          </div>
                          <div className="col-6 form-group">
                            <label>8</label>
                            <Select
                              value={this.state.selectedGender}
                              onChange={this.handleChangeSelect}
                              options={this.state.genders}
                            />
                          </div>
                          {/* <div className="col-12 form-group">
                    <label>8</label>
                    <textarea />
                  </div> */}
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="warning">Send</Button>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(WatchPatientModel);
