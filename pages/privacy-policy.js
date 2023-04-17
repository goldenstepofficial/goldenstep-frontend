import React from 'react';
import Layout from '../components/Layout/Layout';
import MyHead from '../components/Head';

const PrivacyPolicy = () => {
    return (
        <>
            <Layout>
                <MyHead title="Privacy Policy - Goldenstep" description="This is the homepage" />
                <div className="max-w-4xl md:mt-32 mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 text-center">Privacy Policy</h1>
                    <p className="mt-6 text-gray-500">
                        At Golden Step, we take your privacy seriously and are committed to protecting your personal information. This
                        privacy policy explains how we collect, use, and protect your personal information when you use our services.
                    </p>

                    <h2 className="mt-10 text-lg font-medium text-gray-900">Collection of Information</h2>
                    <p className="mt-6 text-gray-500">
                        We collect personal information from you when you use our services, such as your name, email address, phone
                        number, and payment information. We may also collect information about your device and browsing activities,
                        such as your IP address and browser type.
                    </p>

                    <h2 className="mt-10 text-lg font-medium text-gray-900">Use of Information</h2>
                    <p className="mt-6 text-gray-500">
                        We use your personal information to provide you with our services, communicate with you, and improve our
                        services. We may also use your information to personalize your experience and send you marketing
                        communications that we think may interest you.
                    </p>

                    <h2 className="mt-10 text-lg font-medium text-gray-900">Sharing of Information</h2>
                    <p className="mt-6 text-gray-500">
                        We do not sell or rent your personal information to third parties. However, we may share your information
                        with our partners and service providers who help us provide our services. We may also share your information
                        when required by law or to protect our rights or the rights of others.
                    </p>

                    <h2 className="mt-10 text-lg font-medium text-gray-900">Protection of Information</h2>
                    <p className="mt-6 text-gray-500">
                        We take reasonable measures to protect your personal information from unauthorized access, use, and
                        disclosure. We use industry-standard security measures, such as encryption and firewalls, to protect your
                        information.
                    </p>

                    <h2 className="mt-10 text-lg font-medium text-gray-900">Cookies and Tracking Technologies</h2>
                    <p className="mt-6 text-gray-500">
                        We use cookies and other tracking technologies to improve our services and personalize your experience. These
                        technologies may collect information about your browsing activities and device.
                    </p>

                    <h2 className="mt-10 text-lg font-medium text-gray-900">Your Rights</h2>
                    <p className="mt-6 text-gray-500">
                        You have the right to access, correct, and delete your personal information. You can also opt out of receiving
                        marketing communications from us. If you have any questions or concerns about your personal information,
                        please contact us at <a href="mailto:hello@goldenstep.in">hello@goldenstep.in</a> .
                    </p>

                    <h2 className="mt-10 text-lg font-medium text-gray-900">Changes to Privacy Policy</h2>
                    <p className="mt-6 text-gray-500">
                        We may update this privacy policy from time to time. If we make any material changes, we will notify
                        our users by email or by posting a notice on our website.
                    </p>
                </div>
            </Layout>
        </>
    );
};

export default PrivacyPolicy;
