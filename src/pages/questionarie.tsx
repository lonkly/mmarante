/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from "theme-ui"
import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"
import { Link, useThemeUI, get } from "theme-ui"
import { readableColor } from "polished"
import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata"

type Answers = {
        [key: string]: boolean;
};

const QuestionnaireComponent = () => {
        const [answers, setAnswers] = React.useState<Answers>({});
        const [yesCount, setYesCount] = React.useState<number | null>(null);

        const questions = [
                <>Родитель или любой взрослый человек <strong>часто или очень часто</strong> ругал, оскорблял или унижал вас? Или вёл себя таким образом, что вы боялись физически пострадать?</>,
                <>Родитель или любой взрослый человек <strong>часто или очень часто</strong> толкал, хватал, шлепал вас или бросал что-либо в вас?
                        <br />Или хоть один раз ударил вас так сильно, что у вас остались следы или травма?</>,
                <>Взрослый человек или любой человек старше вас более чем на 5 лет хоть один раз трогал или ласкал вас или просил потрогать его/ее с сексуальным намеком?
                        <br />Или занимался или пытался заняться с вами любым видом секса?</>,
                <>Вы часто или очень часто чувствовали что никто в вашей семье не любил или не ценил вас?
                        <br />Или члены вашей семьи не заботились друг о друге, не чувствовали себя близкими людьми или не поддерживали друг друга?</>,
                <>Вы часто или очень часто чувствовали что у вас не было достаточно еды, вы вынуждены были носить грязную одежду и никто о вас не заботился?
                        <br />Или ваши родители находились под слишком сильным влиянием алкоголя или наркотиков, чтобы заботиться о вас или отвезти вас к доктору, когда вам нужна была помощь?</>,
                <>Ваши родители развелись или стали жить раздельно?</>,
                <>Кто-либо совершал следующие действия по отношению к вашей матери или мачехе <strong>часто или очень часто </strong> толкал, хватал, давал пощечину или бросал что-либо в нее?
                        <br />Или <strong> иногда, часто или очень часто </strong> пинал, кусал или ударял кулаком или твердым предметом?
                        <br />Или <strong> хоть один раз </strong> бил в течение нескольких минут или угрожал ножом или огнестрельным оружием?</>,
                <>Вы жили с кем-либо, кто являлся алкоголиком или употреблял наркотики?</>,
                <>Вы жили с кем-либо, у кого была депрессия или психическое расстройство, или кто пытался покончить жизнь см?</>,
                <>Кто-то из тех, с кем вы жили, попал в тюрьму?</>
        ];

        const handleInputChange = (questionId: string, value: boolean) => {
                setAnswers(prev => ({
                        ...prev,
                        [questionId]: value
                }));
        };

        const handleSubmit = (e: React.FormEvent) => {
                e.preventDefault();
                const count = Object.values(answers).filter(answer => answer).length; // Count the number of checked checkboxes (true values)
                setYesCount(count);
        };

        const { siteTitle } = useSiteMetadata()

        const {
                theme: { rawColors },
        } = useThemeUI()

        return (
                <div style={{ display: 'flex' }}>
                        <Layout color="#DDC8C4" >

                                <div style={{ flex: 1, padding: '20px' }}>
                                        <form onSubmit={handleSubmit}>
                                                {questions.map((question, index) => (
                                                        <label key={index} className="question" style={{ display: 'flex', marginBottom: '10px', cursor: 'pointer' }}>
                                                        <span style={{ flexGrow: 1, marginRight: '10px' }}>{question}</span>
                                                        <input
                                                            type="checkbox"
                                                            name={`q${index}`}
                                                            id={`checkbox-${index}`}
                                                            onChange={(e) => handleInputChange(`q${index}`, e.target.checked)}
                                                            checked={answers[`q${index}`] || false}
                                                            style={{ alignSelf: 'center' }} // Adjust alignment as needed
                                                        />
                                                    </label>
                                                ))}
                                                <input type="submit" value="Результат" style={{ marginTop: '20px' }} />
                                        </form>
                                        {yesCount !== null && <div style={{ marginTop: '20px' }}>Ваш балл НДО: {yesCount}</div>}
                                </div>
                        </Layout>
                </div>

        );
};

export default QuestionnaireComponent;
