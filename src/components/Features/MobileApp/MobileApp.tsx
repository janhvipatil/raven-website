import React from 'react';
import Image from 'next/image';
import mobileApp from '../../../../public/assets/MobileAppScreenshots.webp';

const MobileApp = () => {
    return (
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto px-6 md:px-0 pt-16 pb-24 md:pt-20 md:pb-32 space-y-10 bg-white text-black">
            <h2 className='text-4xl sm:text-4xl md:text-5xl md:pb-6 pb-4 font-calsans'>
                Available on the go
            </h2>
            <div className="w-full max-w-3xl">
                <Image
                    src={mobileApp}
                    alt="Mobile App Screenshots"
                    className="w-full h-auto"
                    priority
                />
            </div>

            <div className="flex flex-col items-center space-y-4">
                <h2 className="text-xl font-calsans">Download the app</h2>
                <div className="flex justify-center items-center space-x-4">
                    <a
                        href="https://apps.apple.com/us/app/raven-mobile/id6741682327"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="Download on the App Store"
                            height={44}
                            width={132}
                        />
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=raven.thecommit.company&hl=en_IN"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Get it on Google Play"
                            height={44}
                            width={147}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MobileApp
