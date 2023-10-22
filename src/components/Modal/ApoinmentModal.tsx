/* eslint-disable */
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AppointmentModal = ({
  modalStatus = false,
  setModalStatus,
}: {
  modalStatus: boolean;
  setModalStatus: (item: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const apicall = await axios.post(`http://localhost:8080/events`, data)
      console.log(apicall)
    } catch (error) {
      console.log(error)
    }
    console.log(data);

  };




  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register('title', { required: true })}
              placeholder="Name"
              className="input input-bordered w-full mb-2"
            />
            <div className="w-full mt-1 mb-3 flex justify-start items-center">
              <label className="ms-2">Gender :</label>
              <div className="flex justify-start items-center mx-14">
                <input
                  type="radio"
                  {...register('gender', { required: true })}
                  className="radio radio-primary me-1"
                  id="male"
                  value="male"
                  defaultChecked
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex justify-start items-center">
                <input
                  id="female"
                  type="radio"
                  {...register('gender', { required: true })}
                  value="female"
                  className="radio radio-primary me-1"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>

            <input
              type="number"
              {...register('age', { required: true })}
              placeholder="Age"
              className="input input-bordered w-full mb-2"
            />

            <input
              type="date"
              {...register('date', { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
            />

            <input
              type="time"
              {...register('time', { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
            />

            <button
              className="btn w-full mb-2"
              onClick={() => {
                setModalStatus(false);
              }}
            >
              Create Appointment
            </button>
            <div className="btn w-full mb-2">Close</div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AppointmentModal;
