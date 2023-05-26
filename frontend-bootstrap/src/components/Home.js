import React from 'react'

const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <button className=" btn btn-primary">Add User</button>
        </div>

        <table class="table table-bordered table-responsive">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Abhishek Vishwkarma</td>
              <td>abhishekvishwkarma28@gmail.com</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">Read</button>
                <button className="btn btn-primary">Update</button>
                <button className="btn btn-warning">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Abin T Jose</td>
              <td>abin@xlri.ac.in</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">Read</button>
                <button className="btn btn-primary">Update</button>
                <button className="btn btn-warning">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Rohit Singh</td>
              <td>rohit@xlri.ac.in</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">Read</button>
                <button className="btn btn-primary">Update</button>
                <button className="btn btn-warning">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home