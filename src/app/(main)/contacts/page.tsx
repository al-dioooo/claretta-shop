export default function Contacts() {
    return (
        <>
            <section id="contact" className="relative flex py-16 mx-24 space-x-8">
                <div className="w-1/4 space-y-4">
                    <h1 className="text-2xl font-medium">
                        Get in Touch
                    </h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, repellendus voluptatum.</h2>
                </div>
                <div className="grid w-3/4 grid-cols-2 gap-8">
                    {/* Email */}
                    <div className="p-8 space-y-4 overflow-hidden text-sm bg-gray-100 rounded-xl">
                        <h5 className="text-base font-medium">Email</h5>
                        <div><a href="" className="font-semibold text-teal-500">hello@claretta.id</a></div>
                    </div>
                    {/* WhatsApp */}
                    <div className="p-8 space-y-4 overflow-hidden text-sm bg-gray-100 rounded-xl">
                        <h5 className="text-base font-medium">WhatsApp</h5>
                        <div><a href="" className="font-semibold text-teal-500">+62 XXX-XXXX-XXXX</a></div>
                    </div>
                    {/* Instagram */}
                    <div className="p-8 space-y-4 overflow-hidden text-sm bg-gray-100 rounded-xl">
                        <h5 className="text-base font-medium">Instagram</h5>
                        <div><a href="" className="font-semibold text-teal-500">@claretta.id</a></div>
                    </div>
                    {/* Shopee */}
                    <div className="p-8 space-y-4 overflow-hidden text-sm bg-gray-100 rounded-xl">
                        <h5 className="text-base font-medium">Shopee</h5>
                        <div><a href="" className="font-semibold text-teal-500">@claretta.id</a></div>
                    </div>
                </div>
            </section>
        </>
    )
}