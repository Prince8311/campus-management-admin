import { BillingWrapper } from "../Styles/BillingStyle";

const BillingPage = () => {
    return (
        <>
            <BillingWrapper>
                <div className="page_head">
                    <h2>Subcription Details</h2>
                </div>
                <div className="current_plan_sec"></div>
                <div className="payment_schedule_sec">
                    <div className="payment_head">
                        <h6>Payment Schedule</h6>
                    </div>
                    <div className="table_sec">
                        <table>
                            <thead>
                                <tr>
                                    <th>Installment No</th>
                                    <th>Billing</th>
                                    <th>Due Date</th>
                                    <th>Total Amount</th>
                                    <th>Paid Amount</th>
                                    <th>Due Amount</th>
                                    <th>Status</th>
                                    <th>Invoice</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1 installment</td>
                                    <td>1st May 2024 - 30th Jun 2024</td>
                                    <td>1st May 2024</td>
                                    <td>₹1,03,250</td>
                                    <td>₹1,03,250</td>
                                    <td>₹0</td>
                                    <td>
                                        <p className="unPaid">Uppaid</p>
                                    </td>
                                    <td>
                                        <a className="download"><i class="fa-solid fa-download"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1 installment</td>
                                    <td>1st May 2024 - 30th Jun 2024</td>
                                    <td>1st May 2024</td>
                                    <td>₹1,03,250</td>
                                    <td>₹1,03,250</td>
                                    <td>₹0</td>
                                    <td>
                                        <p className="due">Due</p>
                                    </td>
                                    <td>
                                        <a className="download"><i class="fa-solid fa-download"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1 installment</td>
                                    <td>1st May 2024 - 30th Jun 2024</td>
                                    <td>1st May 2024</td>
                                    <td>₹1,03,250</td>
                                    <td>₹1,03,250</td>
                                    <td>₹0</td>
                                    <td>
                                        <p className="">Paid</p>
                                    </td>
                                    <td>
                                        <a className="download"><i class="fa-solid fa-download"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </BillingWrapper>
        </>
    );
}

export default BillingPage;