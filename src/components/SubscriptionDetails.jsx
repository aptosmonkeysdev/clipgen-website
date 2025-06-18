import {HelpCircleIcon} from "lucide-react";
import {Tooltip} from "./tooltip.js";

const plans = ['Free', 'Creator', 'Pro', 'Enterprise'];

const features = [
    {
        name: 'Output Clip Resolution',
        tooltip: 'Resolution of the short-form clips that you get back.',
        values: ['720P', '720P', '1080P', '1080P'],
    },
    {
        name: 'Input Video Resolution',
        tooltip: 'Maximum resolution of a single episode\'s video file that you can provide to us as an upload.',
        values: ['1080P', '1080P', '1440P', '2160P (4K)'],
    },
    {
        name: 'Maximum Single File Upload',
        tooltip: 'Maximum filesize of a single episode\'s video file that you can provide to us as an upload.',
        values: ['2GB', '2GB', '6GB', '10GB'],
    },
    {
        name: 'Custom Text Overlay',
        tooltip: 'Free tier clips have a subtle ClipGen watermark on them. Free tier is a great way to try the product and see what clips we generate.',
        values: ['✅', '❌', '❌', '❌'],
    },
    {
        name: 'Support 30+ languages',
        tooltip: 'List of supported languages: - English - Spanish - French - German - Italian - Portuguese - Russian - Dutch - Swedish - Norwegian - Danish - Finnish - Polish - Czech ...',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'Add/edit Subtitles',
        tooltip: 'Add/remove words, and correct typos in subtitles.',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'Aspect Ratios (9:16, 4:5, 1:1, 16:9)',
        tooltip: 'Choose export resolution of final clips: 9:16 (most popular), 4:5, 1:1, 16:9.',
        values: ['9:16', '✅', '✅', '✅'],
    },
    {
        name: 'Remove silences',
        tooltip: 'Remove silences (jumpcut) to make the clips snappier and better suited for short-form social platforms.',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'Auto generated title, description and hashtags',
        tooltip: 'We generate recommended title, description, and hashtags to use on social media when posting each clip.',
        values: ['✅', '✅', '✅', '✅'],
    },

    {
        name: 'Audio spectrum (audio-only)',
        tooltip: 'Add an audio spectrum/audiogram for audio-only podcasts to increase engagement.',
        values: ['✅', '✅', '✅', '✅'],
    },
    {
        name: 'Choice of 5 subtitle fonts',
        tooltip: 'Choose from 5 provided fonts to get subtitles matching your branding.',
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
        tooltip: 'Choose to have subtitles in custom font to ensure that the clips match your branding.',
        values: ['❌', '❌', 'COMING SOON', 'COMING SOON'],
    },
    {
        name: 'Multi language subtitles',
        tooltip: 'Translate the subtitles for your clips into any other supported language (e.g. add English subtitles to your Spanish-speaking podcast).',
        values: ['❌', '❌', 'COMING SOON', 'COMING SOON'],
    },
    {
        name: 'Accelerated Hardware',
        tooltip: 'Use the most powerful machines available to get your clips in the fastest possible time, in the most reliable manner.',
        values: ['❌', '❌', '❌', '✅'],
    },
    {
        name: 'Priority Support',
        tooltip: '1-on-1 support.',
        values: ['❌', '❌', '❌', '✅'],
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
