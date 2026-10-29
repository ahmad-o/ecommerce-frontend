import PageHeader from "../components/PageHeader";

function Policy() {
    return (
        <div>

            <PageHeader
                title="Policies"
                description="Please read our policies and terms carefully."
            />


            <section className="policy-page">

                <div className="policy-section">

                    <h2>Privacy Policy</h2>

                    <p>
                        We respect your privacy and are committed to
                        protecting your personal information.
                    </p>

                    <p>
                        Any information provided through our website,
                        such as your name, email address or phone number,
                        will only be used for legitimate business
                        purposes.
                    </p>

                </div>


                <div className="policy-section">

                    <h2>Terms & Conditions</h2>

                    <p>
                        By using this website, you agree to comply with
                        our terms and conditions.
                    </p>

                    <p>
                        Product information, descriptions and prices may
                        be updated from time to time without prior notice.
                    </p>

                </div>


                <div className="policy-section">

                    <h2>Return & Refund Policy</h2>

                    <p>
                        Customers may request a return or refund according
                        to our applicable return and refund conditions.
                    </p>

                    <p>
                        Products must be returned in their original
                        condition where applicable.
                    </p>

                </div>


                <div className="policy-section">

                    <h2>Delivery Policy</h2>

                    <p>
                        Delivery times may vary depending on the location
                        and availability of the product.
                    </p>

                    <p>
                        Customers will be informed about any significant
                        delivery delays.
                    </p>

                </div>


                <div className="policy-section">

                    <h2>Contact Us</h2>

                    <p>
                        If you have any questions regarding our policies,
                        please contact us.
                    </p>

                    <p>
                        Email: info@example.com
                    </p>

                    <p>
                        Phone: +880 1XXXXXXXXX
                    </p>

                </div>

            </section>

        </div>
    );
}

export default Policy;