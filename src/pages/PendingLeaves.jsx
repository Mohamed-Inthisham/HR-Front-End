import React from "react";
import '../css/PendingLeave.css'

function PendingLeaves() {
  return (
    <>

      <div className="container-xxl flex-grow-1 ">
        <h4 className="py-3 mb-4">Employees</h4>
        {/*              Content*/}
        {/*               search bar*/}
        <div className=" card mb-3 p-3">
          <div className="input-group input-group-merge mt-3 " id="search">
            <span className="input-group-text" id="basic-addon-search31">
              <i className="bx bx-search" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search..."
              aria-describedby="basic-addon-search31"
            />
          </div>
          <div className="row py-2 ">
            <div className="col-lg col-12">
              <div>
                <div className="row ">
                  <div className="col-12 mb-2 mb-md-0 col-md ">
                    <div>
                      <select
                        className="form-select "

                        aria-label="Default select example"
                      >
                        <option selected="">By Branch</option>
                        <option value={1}>Colombo</option>
                        <option value={2}>Ratnapura</option>
                        <option value={3}>Galle</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 mb-2 mb-md-0 col-md">
                    <div>
                      <select
                        className="form-select"

                        aria-label="Default select example"
                      >
                        <option selected="">By Department</option>
                        <option value={1}>Gem</option>
                        <option value={2}>Jewellery</option>
                        <option value={3}>License</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 mb-2 mb-md-0 col-md">
                    <div>
                      <select
                        className="form-select"

                        aria-label="Default select example"
                      >
                        <option selected="">By Category</option>
                        <option value={1}>Standard</option>
                        <option value={2}>PL</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/*              table*/}
        <div className="card" id="leavesTable">
          <h5 className="card-header">Pending Leaves</h5>
          <div className="table-responsive text-nowrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Contact Number</th>
                  <th>Branch</th>
                  <th>Department</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                <tr>
                  <td>
                    <span className="fw-medium">15567</span>
                  </td>
                  <td>Albert Cook</td>
                  <td>
                    <span className="fw-medium">0716598265</span>
                  </td>
                  <td>
                    <span className="fw-medium">Colombo</span>
                  </td>
                  <td>
                    <span className="fw-medium">Gem</span>
                  </td>
                  <td>
                    <span className="fw-medium">Standard</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#modalCenter"
                    >
                      <span>
                        <i className="uil uil-setting me-1" />
                      </span>
                      Moderate
                    </button>
                    {/* Modal */}
                    <div
                      className="modal fade"
                      id="modalCenter"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="modalCenterTitle"
                            >
                              Modal title
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col mb-3">
                                <label
                                  htmlFor="nameWithTitle"
                                  className="form-label"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="nameWithTitle"
                                  className="form-control"
                                  placeholder="Enter Name"
                                />
                              </div>
                            </div>
                            <div className="row g-2">
                              <div className="col mb-0">
                                <label
                                  htmlFor="emailWithTitle"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  id="emailWithTitle"
                                  className="form-control"
                                  placeholder="xxxx@xxx.xx"
                                />
                              </div>
                              <div className="col mb-0">
                                <label
                                  htmlFor="dobWithTitle"
                                  className="form-label"
                                >
                                  DOB
                                </label>
                                <input
                                  type="date"
                                  id="dobWithTitle"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="fw-medium">15568</span>
                  </td>
                  <td>Sasida Dilhan</td>
                  <td>
                    <span className="fw-medium">0756987159</span>
                  </td>
                  <td>
                    <span className="fw-medium">Colombo</span>
                  </td>
                  <td>
                    <span className="fw-medium">Gem</span>
                  </td>
                  <td>
                    <span className="fw-medium">Standard</span>
                  </td>
                  <td>
                    <button type="button" className="btn btn-secondary">
                      <span>
                        <i className="uil uil-setting me-1" />
                      </span>
                      Moderate
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="fw-medium">15569</span>
                  </td>
                  <td>Purna Lakshitha</td>
                  <td>
                    <span className="fw-medium">0716598265</span>
                  </td>
                  <td>
                    <span className="fw-medium">Ratnapura</span>
                  </td>
                  <td>
                    <span className="fw-medium">Gem</span>
                  </td>
                  <td>
                    <span className="fw-medium">PL</span>
                  </td>
                  <td>
                    <button type="button" className="btn btn-secondary">
                      <span>
                        <i className="uil uil-setting me-1" />
                      </span>
                      Moderate
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="fw-medium">15570</span>
                  </td>
                  <td>Dasun Kavinga</td>
                  <td>
                    <span className="fw-medium">0773615752</span>
                  </td>
                  <td>
                    <span className="fw-medium">Galle</span>
                  </td>
                  <td>
                    <span className="fw-medium">Jewellery</span>
                  </td>
                  <td>
                    <span className="fw-medium">Standard</span>
                  </td>
                  <td>
                    <button type="button" className="btn btn-secondary">
                      <span>
                        <i className="uil uil-setting me-1" />
                      </span>
                      Moderate
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="fw-medium">15580</span>
                  </td>
                  <td>Chanaka Nagoda</td>
                  <td>
                    <span className="fw-medium">0751436751</span>
                  </td>
                  <td>
                    <span className="fw-medium">Colombo</span>
                  </td>
                  <td>
                    <span className="fw-medium">Gem</span>
                  </td>
                  <td>
                    <span className="fw-medium">Standard</span>
                  </td>
                  <td>
                    <button type="button" className="btn btn-secondary">
                      <span>
                        <i className="uil uil-setting me-1" />
                      </span>
                      Moderate
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/*/ Basic Bootstrap Table */}
        {/*pagination */}
        <div className="pegination-custom">
          <nav aria-label="Page navigation" id="pagination">
            <ul className="pagination">
              <li className="page-item first">
                <a className="page-link" href="javascript:void(0);">
                  <i className="tf-icon bx bx-chevrons-left" />
                </a>
              </li>
              <li className="page-item prev">
                <a className="page-link" href="javascript:void(0);">
                  <i className="tf-icon bx bx-chevron-left" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  2
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="javascript:void(0);">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  5
                </a>
              </li>
              <li className="page-item next">
                <a className="page-link" href="javascript:void(0);">
                  <i className="tf-icon bx bx-chevron-right" />
                </a>
              </li>
              <li className="page-item last">
                <a className="page-link" href="javascript:void(0);">
                  <i className="tf-icon bx bx-chevrons-right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>


    </>


  );
}

export default PendingLeaves;
