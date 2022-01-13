import { useForm } from "react-hook-form"
//import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import { usePostApplicationMutation } from '../hooks/applicationsApi'
//import { useHistory } from 'react-router-dom';
import { useState } from 'react'


function AppForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  //const { data, error, isLoading } = usePostApplicationMutation();
  //const history = useHistory();

  const [error, setError] = useState('');
  const [sendApp, { isLoading: isUpdating }, isError] = usePostApplicationMutation();

  const onSubmit = async (formData) => {
    const result = await sendApp(formData);
    //console.log(result)
    //console.log(isError);
    if(result) {
      if(result.data && result.data.success) {
        window.location.href = "/";
      }
      else if(result.error && !result.error.data.success && result.error.data.message) {
        setError(result.error.data.message);
      }
      else {
        setError('Oops an error has occured');
      }
    }
  };
  //console.log(watch("email"));
  return(
    <form onSubmit={handleSubmit(onSubmit)} method="POST">

      <Form.Group className="mb-3">
        <label className="form-label">Business Name</label>
        <input 
         className="form-control mb-2"
          type="text"
          id="BusinessName"
          placeholder="Enter Business Name"
          {...register("BusinessName", { required: true })}
        />
        {errors.BusinessName && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

      <Form.Group className="mb-3">
      <label className="form-label">Email</label>
        <input 
          className="form-control mb-2"
          id="email"
          type="email" 
          placeholder="Enter email"
          {...register("email", { required: true })}
        />
        {errors.email && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

      <Form.Group className="mb-3">
      <label className="form-label">Industry</label>
        <input 
          className="form-control mb-2"
          id="industry"
          type="text" 
          placeholder="Enter Industry"
          {...register("industry", { required: true })}
        />
        {errors.industry && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

      <Form.Group className="mb-3">
        <label className="form-label">Annual Sales</label>
        <select className="form-select form-select-md mb-3" id="annualSales" 
        //{...register("annualSales", { required: true })}
        {...register("annualSales",{required: true})}>
          <option value="">Select Annual Sales</option>
          <option value="50000">$50,000</option>
          <option value="75000">$75,000</option>
          <option value="100000">$100,000</option>
          <option value="150000">$150,000</option>
          <option value="200000">$200,000</option>
        </select>
        {errors.annualSales && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

      <Form.Group className="mb-3">
        <label className="form-label">Annual Payroll</label>
        <select className="form-select form-select-md mb-3" id="annualPayroll" 
        //{...register("annualSales", { required: true })}
        {...register("annualPayroll",{required: true})}>
          <option value="">Select Annual Payroll</option>
          <option value="50000">$50,000</option>
          <option value="75000">$75,000</option>
          <option value="100000">$100,000</option>
          <option value="150000">$150,000</option>
          <option value="200000">$200,000</option>
        </select>
        {errors.annualPayroll && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

      <Form.Group className="mb-3">
        <label className="form-label">Number Of Employees</label>
        <input 
          className="form-control mb-2"
          id="numberOfEmployees"
          type="text"
          maxLength="6"
          placeholder="Enter Number Of Employees"
          {...register("numberOfEmployees", { required: true })}
        />
        {errors.numberOfEmployees && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

      <Form.Group className="mb-3">
        <label className="form-label">ZipCode</label>
        <input 
          className="form-control mb-2"
          id="zipCode"
          type="text"
          maxLength="5"
          placeholder="Enter ZipCode"
          {...register("zipCode", { required: true })}
        />
        {errors.zipCode && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

    {
      error && error.length > 0
      ?
      <Alert variant="danger">{error}</Alert>
      :
      null
    }
      <Form.Group className="mb-3">
      <button className="btn btn-primary" type="submit" >Submit</button>
      </Form.Group>

    </form>
  )
}

export default AppForm;