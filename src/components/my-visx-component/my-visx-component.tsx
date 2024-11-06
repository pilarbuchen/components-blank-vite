import React, { useState } from 'react';
import { Bar } from '@visx/shape';
import { scaleBand, scaleLinear } from '@visx/scale';
import { GradientTealBlue } from '@visx/gradient';
import { useTooltip, TooltipWithBounds } from '@visx/tooltip';
import { useSpring, animated } from '@react-spring/web';

const data = [
    { name: 'January', value: 50 },
    { name: 'February', value: 80 },
    { name: 'March', value: 65 },
    { name: 'April', value: 90 },
];

const width = 500;
const height = 300;
const margin = { top: 20, right: 20, bottom: 40, left: 50 };

const xScale = scaleBand({
    range: [0, width - margin.left - margin.right],
    round: true,
    domain: data.map((d) => d.name),
    padding: 0.4,
});

const yScale = scaleLinear({
    range: [height - margin.top - margin.bottom, 0],
    round: true,
    domain: [0, Math.max(...data.map((d) => d.value))],
});

const MyVisxComponent: React.FC = () => {
    const { showTooltip, hideTooltip, tooltipData, tooltipTop, tooltipLeft } = useTooltip<{
        name: string;
        value: number;
    }>();
    const [activeBar, setActiveBar] = useState<string | null>(null);

    return (
        <svg width={width} height={height}>
            {/* Gradient Background for Bars */}
            <GradientTealBlue id="teal" />

            <g transform={`translate(${margin.left}, ${margin.top})`}>
                {data.map((d) => {
                    const barHeight = height - margin.top - margin.bottom - (yScale(d.value) ?? 0);
                    const AnimatedBar = animated(Bar);

                    const springProps = useSpring({
                        from: { height: 0 },
                        to: { height: barHeight },
                        delay: 200,
                    });

                    return (
                        <AnimatedBar
                            key={`bar-${d.name}`}
                            x={xScale(d.name)}
                            y={yScale(d.value)}
                            width={xScale.bandwidth()}
                            height={springProps.height}
                            fill="url(#teal)"
                            onMouseEnter={(event) => {
                                setActiveBar(d.name);
                                showTooltip({
                                    tooltipData: d,
                                    tooltipTop: event.clientY - margin.top,
                                    tooltipLeft: event.clientX - margin.left,
                                });
                            }}
                            onMouseLeave={() => {
                                setActiveBar(null);
                                hideTooltip();
                            }}
                        />
                    );
                })}
            </g>

            {/* Axis Labels */}
            <text x={width / 2} y={height - margin.bottom + 30} textAnchor="middle">
                Months
            </text>
            <text x={-height / 2} y={20} transform="rotate(-90)" textAnchor="middle">
                Value
            </text>

            {/* Tooltip */}
            {tooltipData && (
                <TooltipWithBounds
                    top={tooltipTop}
                    left={tooltipLeft}
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        color: 'white',
                        padding: '5px 10px',
                    }}
                >
                    <div>
                        <strong>{tooltipData.name}</strong>: {tooltipData.value}
                    </div>
                </TooltipWithBounds>
            )}
        </svg>
    );
};

export default MyVisxComponent;
