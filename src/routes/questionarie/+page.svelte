<script lang="ts">
    import { onMount } from 'svelte';

    // Data for questions
    let answers: Record<string, boolean> = {};
    let yesCount: number | null = null;

    const questions = [
        'Родитель или любой взрослый человек часто или очень часто ругал, оскорблял или унижал вас? Или вёл себя таким образом, что вы боялись физически пострадать?',
        'Родитель или любой взрослый человек часто или очень часто толкал, хватал, шлепал вас или бросал что-либо в вас? Или хоть один раз ударил вас так сильно, что у вас остались следы или травма?',
        'Взрослый человек или любой человек старше вас более чем на 5 лет хоть один раз трогал или ласкал вас или просил потрогать его/ее с сексуальным намеком? Или занимался или пытался заняться с вами любым видом секса?',
        'Вы часто или очень часто чувствовали что никто в вашей семье не любил или не ценил вас? Или члены вашей семьи не заботились друг о друге, не чувствовали себя близкими людьми или не поддерживали друг друга?',
        'Вы часто или очень часто чувствовали что у вас не было достаточно еды, вы вынуждены были носить грязную одежду и никто о вас не заботился? Или ваши родители находились под слишком сильным влиянием алкоголя или наркотиков, чтобы заботиться о вас или отвезти вас к доктору, когда вам нужна была помощь?',
        'Ваши родители развелись или стали жить раздельно?',
        'Кто-либо совершал следующие действия по отношению к вашей матери или мачехе часто или очень часто толкал, хватал, давал пощечину или бросал что-либо в нее? Или иногда, часто или очень часто пинал, кусал или ударял кулаком или твердым предметом? Или хоть один раз бил в течение нескольких минут или угрожал ножом или огнестрельным оружием?',
        'Вы жили с кем-либо, кто являлся алкоголиком или употреблял наркотики?',
        'Вы жили с кем-либо, у кого была депрессия или психическое расстройство, или кто пытался покончить с собой?',
        'Кто-то из тех, с кем вы жили, попал в тюрьму?',
    ];

    // Handle checkbox change
    const handleInputChange = (questionId: string, value: boolean) => {
        answers = { ...answers, [questionId]: value };
    };

    // Calculate results on form submit
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        yesCount = Object.values(answers).filter((value) => value).length;
    };
</script>

<style>
    .question {
        display: flex;
        margin-bottom: 10px;
        cursor: pointer;
        align-items: center;
    }

    .question span {
        flex-grow: 1;
        margin-right: 10px;
    }

    input[type='submit'] {
        margin-top: 20px;
        min-height: 44px;
        padding: 10px 20px;
        background-color: #ddc8c4;
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 1rem;
        cursor: pointer;
    }

    input[type='submit']:hover {
        background-color: #c5a9a1;
    }

    .result {
        margin-top: 20px;
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
    }
</style>

<div class="container">
    <form on:submit={handleSubmit}>
        {#each questions as question, index}
            <label class="question">
                <span>{question}</span>
                <input
                        type="checkbox"
                        bind:checked={answers[`q${index}`]}
                        id={`checkbox-${index}`}
                />
            </label>
        {/each}
        <input type="submit" value="Результат" />
    </form>

    {#if yesCount !== null}
        <div class="result">Ваш балл НДО: {yesCount}</div>
    {/if}
</div>