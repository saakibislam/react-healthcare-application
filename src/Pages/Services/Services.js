import React from 'react';

const Services = () => {
    return (
        <div className="container">
            <div className="row my-5 text-start">
                <h2>For General Patients</h2>
                <div className="col-lg-8">
                    <table class="table table-striped">
                        <tr>
                            <td>Pathology</td>
                            <td>Bio-Chemistry</td>
                        </tr>
                        <tr>
                            <td>Pathology</td>
                            <td>Serology</td>
                        </tr>
                        <tr>
                            <td>E.G.G</td>
                            <td>Ultrasonography</td>
                        </tr>
                        <tr>
                            <td>Echo Cardiagraphy</td>
                            <td>Endoscopy</td>
                        </tr>
                    </table>
                    <div className="my-4">
                        <h2>For Overseas Patient</h2>
                        <ul>
                            <li>To perform Medical Examination as per guidelines sets by concern countries Ministry</li>
                            <li>To ensure 100% accuracy in Medical Fitness Examination</li>
                            <li>To cordinate between Health center and respective Embassy</li>
                            <li>To ensure Medical Examination as per demand by foreign bound workers and delivery the reports shortest possible time.</li>
                        </ul>
                    </div>

                </div>
                <div className="col-lg-4">
                    <img width="360" height="253" src="http://www.checkupbd.com/img/medical_services.jpg" alt="" />
                </div>
            </div >
        </div >
    );
};

export default Services;