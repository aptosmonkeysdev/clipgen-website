import {useState} from "react";
import SubscriptionDetails from "../components/SubscriptionDetails.jsx";

export const Pricing = () => {
    const [creatorLevel, setCreatorLevel] = useState(1); // Range 1–5
    const [proLevel, setProLevel] = useState(1); // Range 1–5
    const [showDetails , setShowDetails] = useState(false)

    return  (
        <div>
            <div className="grid grid-cols-4 md:flex-row gap-4 justify-center items-stretch p-8 pb-0 text-white">
                {/* Free Plan */}
                <div className={`bg-[#111] rounded-xl p-6  justify-between shadow-md `}>
                    <div>
                        <h3 className="text-blue-400 font-semibold text-lg mb-1">Free </h3>
                        <div className="flex items-center mt-5">
                            <p className="text-3xl font-bold mb-2">Free </p>
                            <p className={"text-[#928D8F]"}>/ month
                            </p>
                        </div>
                    </div>
                    <ul className="mb-4 space-y-1 text-sm mt-5">
                        <li className="flex gap-2"><img src="/check.svg" /> 5 Clips (720p)</li>
                        <li className="flex gap-2"><img src="/check.svg" /> 60 Upload Minutes</li>
                    </ul>
                </div>

                {/* Creator Plan */}
                <div className={`bg-[#111] rounded-xl p-6   justify-between shadow-md `}>
                    <div>
                        <h3 className="text-[#E99700] font-semibold text-lg mb-1">Creator</h3>
                        <p className="text-3xl mt-5 font-bold mb-2">${(5 * creatorLevel).toFixed(2)} <span className="text-sm font-normal text-white">/ month</span></p>
                    </div>

                    <ul className="mb-4 space-y-1 text-sm mt-5">
                        <li className="flex gap-2"><img src="/check.svg" /> {10 * creatorLevel} Clips (720p)</li>
                        <li className="flex gap-2"><img src="/check.svg" /> {60 * creatorLevel} Upload Minutes</li>
                    </ul>
                    <div className="mt-4 text-sm text-gray-400 mt-5">
                        <p className="mb-1">Drag slider to customise plan:</p>
                        <input type="range" min={1} max={12} value={creatorLevel} onChange={(e) => setCreatorLevel(parseInt(e.target.value))} className="w-full h-2 bg-gray-700 rounded-full cursor-pointer accent-[#FAAF3B]" />
                    </div>
                </div>

                {/* Pro Plan */}
                <div className={`bg-[#111] rounded-xl p-6 justify-between shadow-md`}>
                    <div>
                        <h3 className="text-yellow-400 font-semibold text-lg mb-1 flex gap-2"><img src="/king.svg" />Pro</h3>
                        <p className="text-3xl mt-5 font-bold mb-2">${(10 * proLevel).toFixed(2)} <span className="text-sm font-normal text-white">/ month</span></p>

                    </div>

                    <ul className="mb-4 space-y-1 text-sm mt-5">
                        <li className="flex gap-2"><img src="/check.svg" /> {15 * proLevel} Clips (1080p)</li>
                        <li className="flex gap-2"><img src="/check.svg" /> {60 * proLevel} Upload Minutes</li>
                    </ul>

                    <div className="mt-5 text-sm text-gray-400 ">
                        <p className="mb-1">Drag slider to customise plan:</p>
                        <input type="range" min={1} max={60} value={proLevel} onChange={(e) => setProLevel(parseInt(e.target.value))} className="w-full h-2 bg-gray-700 rounded-full cursor-pointer accent-[#FAAF3B]" />
                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className={`bg-[#111] rounded-xl p-6  flex flex-col justify-between shadow-md  `}>
                    <div>
                        <h3 className="text-red-500 font-semibold text-lg mb-1">Enterprise</h3>
                        <p className="text-3xl font-bold mb-2">Contact Us</p>
                        <p className="text-sm text-gray-400 mt-6">Have more advanced needs?</p>
                    </div>

                        <a href="mailto:team@clipgen.io" className="w-full rounded-md px-4 py-2 font-medium bg-[#1E1E1F] text-white text-center">Contact Now</a>
                </div>
            </div>
            {
                !showDetails &&
                <div className="flex items-center justify-center mt-3">
                    <button onClick={()=>setShowDetails(true)} className={"bg-[#1E1E1F] text-white px-3 py-2 rounded-md mb-3"}>View Details Plan</button>
                </div>
            }

            {
                showDetails &&
                <div>
                    <SubscriptionDetails/>
                    <div className="flex items-center justify-center mt-2">
                        <button onClick={()=>setShowDetails(false)} className={"bg-[#1E1E1F] text-white px-3 py-2 rounded-md mb-3"}>Show Less</button>
                    </div>
                </div>
            }
        </div>
    )
}
export default Pricing;