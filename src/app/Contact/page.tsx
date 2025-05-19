export default function Contact() {
    return(
        <header>
                <div className="w-full">
                    <div className="relative">
                        <video
                            playsInline
                            autoPlay
                            muted
                            loop
                            className="w-full h-screen object-cover"
                        >
                            <source
                                src="https://eldxcanxwvrnsvxkoaiv.supabase.co/storage/v1/object/public/storage/Video/Contact.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <div className="absolute bottom-0 mb-4">
                            <div className="w-11/12 mx-auto">
                                <div className="text-white text-[8vw] md:text-[5vw] font-semibold">
                                    <h2>DIVISION OF COMPUTER AND INFORMATION TECHNOLOGY</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}