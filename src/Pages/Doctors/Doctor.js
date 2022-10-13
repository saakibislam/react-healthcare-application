import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Doctor = () => {
    const { docId } = useParams();
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        // https://mocki.io/v1/d66acfd9-3c3c-4535-b38e-7e6f59f9fd7f

        fetch('https://mocki.io/v1/d2d17b56-dba9-4378-b806-8fac029fa84b')
            .then(response => response.json())
            .then(data => {
                const matchedDoc = data.find(dc => dc.id.toString() === docId);
                setDoctors(matchedDoc);
            })
    }, [docId])

    if (!doctors) {
        return <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-md-6 my-5">
                    <h2>{doctors.name}</h2>
                    <h5 className="text-danger mt-4">{doctors.department} Specialist</h5>
                    <div className="text-start mt-5">
                        <p>{doctors.subjects}</p>
                        <p>{doctors.study} College</p>
                        <h5>Location: {doctors.chamber} Hospital</h5>
                        <h3 className="mt-5">Fees: <span className="text-success">{doctors.fees}Tk</span></h3>
                    </div>
                    <button className="btn btn-lg btn-warning mt-3" title="I don't work.">Confirm</button>
                </div>
                <div className="col-md-6">
                    <img className="h-75 my-auto" src={doctors.img} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Doctor;