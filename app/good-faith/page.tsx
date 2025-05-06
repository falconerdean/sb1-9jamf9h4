'use client';

import React from 'react';

export default function GoodFaithPage() {
  return (
    <div className="pt-32 pb-16 bg-[#F4FFF6]">
      <div className="container-width px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">
            Good Faith Estimate
          </h1>

          <div className="prose prose-lg">
            <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
              <h2 className="text-2xl font-serif text-primary mb-6">
                Your Right to a "Good Faith Estimate"
              </h2>
              <p className="text-text-light mb-6">
                Under the law, health care providers need to give patients who don't have insurance or who are not using insurance an estimate of the bill for medical items and services.
              </p>
              <p className="text-text-light mb-6">
                You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.
              </p>
              <p className="text-text-light mb-6">
                Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.
              </p>
              <p className="text-text-light mb-6">
                If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.
              </p>
              <p className="text-text-light">
                Make sure to save a copy or picture of your Good Faith Estimate.
              </p>
              <div className="mt-8 p-4 rounded-lg">
                <p className="text-text-light">
                  For questions or more information about your right to a Good Faith Estimate, visit{' '}
                  <a href="https://www.cms.gov/nosurprises" className="text-orange hover:text-orange-dark" target="_blank" rel="noopener noreferrer">
                    www.cms.gov/nosurprises
                  </a>{' '}
                  or call <a href="tel:856-437-0274" className="text-orange hover:text-orange-dark">856-437-0274</a>.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-serif text-primary mb-6">
                Disclaimer
              </h2>
              <p className="text-text-light mb-6">
                This Good Faith Estimate shows the costs of items and services that are reasonably expected for your health care needs for an item or service. The estimate is based on information known at the time the estimate was created.
              </p>
              <p className="text-text-light mb-6">
                The Good Faith Estimate does not include any unknown or unexpected costs that may arise during treatment. You could be charged more if complications or special circumstances occur. If this happens, federal law allows you to dispute (appeal) the bill.
              </p>
              <div className="mt-8 p-4 rounded-lg">
                <p className="text-text-light">
                  For questions or more information about your right to a Good Faith Estimate, visit{' '}
                  <a href="https://www.cms.gov/nosurprises" className="text-orange hover:text-orange-dark" target="_blank" rel="noopener noreferrer">
                    www.cms.gov/nosurprises
                  </a>{' '}
                  or call <a href="tel:856-437-0274" className="text-orange hover:text-orange-dark">856-437-0274</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}