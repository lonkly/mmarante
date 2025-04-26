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

<!-- Tailwind-based styles can go directly in class attributes or <style global>.
     We'll use minimal custom CSS below. -->

<style>
    .result {
        margin-top: 20px;
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
    }

    /* Remove any old .question styling if you don't need it anymore. */
</style>

<div class="w-full mx-auto p-4">
    <h1 class="text-3xl">Опросник ТДО</h1>
    <br>
    <form on:submit={handleSubmit} class="space-y-4">
        {#each questions as question, index}
            <!-- Each question is in its own "card" -->
            <label
              class="block bg-white shadow rounded-lg p-4 cursor-pointer
                       flex items-center justify-between"
            >
                <!-- Question Text -->
                <span class="mr-4 flex-grow">
                    {question}
                </span>

                <!-- Checkbox -->
                <input
                  type="checkbox"
                  bind:checked={answers[`q${index}`]}
                  id={`checkbox-${index}`}
                />
            </label>
        {/each}

        <!-- Submit Button -->
        <input
          type="submit"
          value="Результат"
          class="bg-primary-light hover:bg-primary text-white
                   py-2 px-6 rounded-md cursor-pointer"
        />
    </form>

    <!-- Result Section -->
    {#if yesCount !== null}
        <div class="result">Ваш балл НДО: {yesCount}</div>
    {/if}
</div>