import { Shopee, TikTok, WhatsApp } from "@/components/icons/outline";

export default function Links() {
    return (
        <div className="flex flex-col items-center min-h-screen pt-8 space-y-16 text-center bg-neutral-200">
            <section id="header" className="space-y-4">
                <div className="">
                    <img className="rounded-full w-36 h-36" src="https://placehold.co/300x300/F5F5F5/31343C?font=source-sans-pro&text=300x300" alt="" />
                </div>
                <h1 className="text-lg font-semibold">@claretta.id</h1>
            </section>
            <section id="links" className="w-full max-w-xl space-y-4">
                <h2 className="font-medium">Order Via</h2>
                <div className="w-full space-y-4">
                    {/* Link 1 */}
                    <a href="" className="bg-white relative flex items-center justify-center p-3 border-2 border-black shadow-[10px_10px_0px_-3px_rgba(0,0,0,1)]">
                        {/* Image */}
                        <div className="absolute inset-y-0 left-0 flex items-center p-1">
                            <div className="p-2 text-white bg-green-500">
                                <WhatsApp className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                        </div>
                        <span className="text-center">WhatsApp</span>
                    </a>

                    {/* Link 2 */}
                    <a href="" className="bg-white relative flex items-center justify-center p-3 border-2 border-black shadow-[10px_10px_0px_-3px_rgba(0,0,0,1)]">
                        {/* Image */}
                        <div className="absolute inset-y-0 left-0 flex items-center p-1">
                            <div className="p-2 text-white bg-orange-500">
                                <Shopee className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                        </div>
                        <span className="text-center">Shopee</span>
                    </a>

                    {/* Link 2 */}
                    <a href="" className="bg-white relative flex items-center justify-center p-3 border-2 border-black shadow-[10px_10px_0px_-3px_rgba(0,0,0,1)]">
                        {/* Image */}
                        <div className="absolute inset-y-0 left-0 flex items-center p-1">
                            <div className="p-2 text-white bg-black">
                                <TikTok className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                        </div>
                        <span className="text-center">TikTok</span>
                    </a>
                </div>
            </section>
        </div>
    )
}