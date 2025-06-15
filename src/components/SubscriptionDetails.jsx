import {HelpCircleIcon} from "lucide-react";
import {Tooltip} from "./tooltip.js";

const plans = ['Free', 'Creator', 'Pro', 'Enterprise'];

const features = [
    {
        name: 'Output Clip Resolution',
        tooltip: 'The resolution of the exported clip.',
        values: ['720P', '720P', '1080P', '1080P'],
    },
    {
        name: 'Input Video Resolution',
        tooltip: 'The maximum resolution your uploaded video can be.',
        values: ['1080P', '1080P', '1440P', '2160P (4K)'],
    },
    {
        name: 'Maximum Single File Upload',
        tooltip: 'Max file size you can upload at once.',
        values: ['2GB', '2GB', '6GB', '10GB'],
    },
    {
        name: 'Watermark',
        tooltip: 'Indicates whether output includes a watermark.',
        values: ['✅', '❌', '❌', '❌'],
    },
    {
        name: 'Support 30+ languages',
        tooltip: 'Supports over 30 different spoken languages.',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'Add/edit Subtitles',
        tooltip: 'Add or edit subtitles directly in the editor.',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'A.I Title, Description and Hashtags',
        tooltip: 'Generate titles, descriptions, and hashtags using AI.',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'A.I Keyword Highlighting',
        tooltip: 'Automatically highlights important keywords.',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'A.I Animated Emojis',
        tooltip: 'Add animated emojis to match the tone and content.',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'Aspect Ratios (9:16, 4:5, 1:1, 16:9)',
        tooltip: 'Choose from multiple video aspect ratios.',
        values: ['9:16', '✅', '✅', '✅'],
    },
    {
        name: 'Remove silences',
        tooltip: 'Automatically remove silent parts from videos.',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'Audio spectrum (audio-only)',
        tooltip: 'Visualize audio waveforms in audio-only clips.',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'Choice of 5 subtitle fonts',
        tooltip: 'Select from 5 built-in subtitle fonts.',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'Adjust Clip Start/End',
        tooltip: 'Trim your clips precisely.',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'Full Episode Transcripts',
        tooltip: 'Generate transcripts for the entire episode.',
        values: ['❌', '❌', '✅', '✅'],
    },
    {
        name: 'Custom subtitle fonts',
        tooltip: 'Upload your own fonts for subtitles.',
        values: ['❌', '❌', 'COMING SOON', 'COMING SOON'],
    },
    {
        name: 'Download clean highlight files',
        tooltip: 'Download highlight files without extra markup.',
        values: ['❌', '❌', 'COMING SOON', 'COMING SOON'],
    },
    {
        name: 'Multi language subtitles',
        tooltip: 'Generate subtitles in multiple languages.',
        values: ['❌', '❌', 'COMING SOON', 'COMING SOON'],
    },
    {
        name: 'Accelerated Hardware',
        tooltip: 'Utilize faster hardware for rendering.',
        values: ['❌', '❌', '❌', '✅'],
    },
    {
        name: 'Priority Support',
        tooltip: 'Get faster and prioritized support from the team.',
        values: ['❌', '❌', '❌', '✅'],
    },
];

export default function SubscriptionDetails() {
    return (
        <div className="overflow-x-auto px-4 py-8">
            <table className="min-w-full ">
                <thead className={"bg-backgroundneutral-0-night"}>
                <tr className="text-white ">
                    <th className="w-1/4 p-2 text-left">FEATURES</th>
                    {plans.map((plan) => (
                        <th key={plan} className="w-1/5 p-2 items-center">{plan}</th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-backgroundneutral-0-night text-white">
                {features.map((feature, index) => (
                    <tr key={index} className={`bg-red ${index %2 === 0 ? 'bg-transaprent' : 'bg-backgroundneutral-100-night'}`}>
                        <td className="p-2 flex items-center gap-1 text-sm">
                            {feature.name}
                            <Tooltip  message={feature.tooltip}>
                                <HelpCircleIcon className="w-4 h-4 ml-2 text-[#8D8E92] cursor-pointer"/>
                            </Tooltip>
                        </td>
                        {feature.values.map((val, i) => (
                            <td key={i} className="text-[#8D8E92] text-center items-center justify-center p-2 text-sm">

                                {
                                    val === '✅' &&
                                    <div className="flex justify-center items-center">
                                        <img src={"/check.svg"} className={"text-center align-center"} alt={"check"}/>
                                    </div>
                                }
                                {
                                    val === '❌' &&
                                    <div className="flex justify-center items-center">
                                        <img src={"/cross.svg"} className={"text-center align-center"} alt={"check"}/>
                                    </div>
                                }
                                {
                                    val !== '✅' && val !== '❌' &&
                                    <span>{val}</span>
                                }
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
