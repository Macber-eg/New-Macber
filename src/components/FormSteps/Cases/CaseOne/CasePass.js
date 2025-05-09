import Paragraph from "../../../../UI/Paragraph";
import Arrow from "../../../../assets/icon/arrowRight.svg";

const CasePass = ({values, touched, errors, handleChange, handleBlur , num}) => {
    return (
      <>
        <div className="container py-4   wow animate__animated animate__fadeInLeft animate__delay">
        <div className=" step p-0">
            <div className="d-flex">
            

              <Paragraph className="title-white-sm  d-flex ">
                What's Your name?
              </Paragraph>
            </div>
            <label htmlFor="name" className="form-label">
              <input
                autocomplete="off"
                id="name"
                className="input-step p-3  my-4"
                type="text"
                placeholder="Type your name"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
            </label>
            {errors.name && touched.name && (
              <p className="text-danger mb-0">{errors.name}</p>
            )}
          </div>
        <div className=" step p-0">
            <div className="d-flex">
            

              <Paragraph className="title-white-sm  d-flex ">
                What's Your Phone?
              </Paragraph>
            </div>
            <label htmlFor="Phone" className="form-label">
              <input
                autocomplete="off"
                id="Phone"
                className="input-step p-3  my-4"
                type="text"
                placeholder="Type your Phone"
                name="Phone"
                onChange={handleChange}
                value={values.Phone}
              />
            </label>
            {errors.Phone && touched.Phone && (
              <p className="text-danger mb-0">{errors.Phone}</p>
            )}
          </div>
          <div className=" step p-0">
            <div className="d-flex">
            

              <Paragraph className="title-white-sm  d-flex ">
                What's Your Email?
              </Paragraph>
            </div>
            <label htmlFor="email" className="form-label">
              <input
                autocomplete="off"
                id="email"
                className="input-step p-3  my-4"
                type="text"
                placeholder="Type your email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </label>
            {errors.email && touched.email && (
              <p className="text-danger mb-0">{errors.email}</p>
            )}
          </div>
          <div className=" step p-0">
            <div className="d-flex">

              <Paragraph className="title-white-sm  d-flex ">
                What's Your password ?
              </Paragraph>
            </div>
            <label htmlFor="password" className="form-label">
              <input
                autocomplete="off"
                id="password"
                className="input-step p-3 my-4"
                type="password"
                placeholder="Type your password "
                name="password"
                onChange={handleChange}
                value={values.password}
              />
            </label>
            {errors.password && touched.password && (
              <p className="text-danger mb-0">{errors.password}</p>
            )}
          </div>
        </div>
      </>
    );
};
export default CasePass;