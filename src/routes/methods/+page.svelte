<script>
    const methods = [
        {
            title: 'EMDR',
            description: `EMDR (Eye Movement Desensitization and Reprocessing) – с английского переводится как ДПДГ (Десенсибилизация и переработка движением глаз). EMDR — уникальный метод психотерапии, имеющий доказанную эффективность и помогающий справиться с последствиями перенесенных психологических травм. В 2013 году Всемирная Организация Здравоохранения официально рекомендовала EMDR как наиболее эффективную терапию для работы с посттравматическим стрессовым расстройством.`
        },
        {
            title: 'IFS',
            description: `IFS (Internal Family Systems) – новейший интегративный подход в психотерапии, работает с широким спектром проблем, объединяет системную логику, концепт множественности личности, работу с травмой и телесными ощущениями.`
        },
        {
            title: 'CBT или КПТ',
            description: `CBT (cognitive behavioral therapy) или КПТ – имеет доказанную эффективность при различных психических расстройствах и фокусируется на изменении дезадаптивных эмоций, мыслей и поведения.`
        },
        {
            title: 'Flash',
            description: `Техника Flash, разработана Филиппом Мэнфилдом, эффективна при снижении уровня беспокойства, связанного с тяжёлыми воспоминаниями. Часто используется как часть EMDR.`
        },
        {
            title: 'DBT',
            description: `DBT (dialectical behavior therapy) – диалектико-поведенческая терапия, работающая с поведением, мыслями, эмоциями и навыками осознанности (mindfulness).`
        },
        {
            title: 'ACT или Терапия принятия и ответственности',
            description: `ACT (acceptance and commitment therapy) – терапия третьей волны КПТ, где основной упор делается на принятие трудных переживаний и осознанный выбор действий в соответствии со своими ценностями.`
        },
        {
            title: 'CFT',
            description: `CFT (Compassion-focused therapy) – терапия, ориентированная на сострадание. Полезна при самокритике, чувстве стыда и трудностях в принятии себя.`
        },
        {
            title: 'SFBT',
            description: `SFBT (Solution-focused brief therapy) – краткосрочная терапия, ориентированная на поиск и реализацию решений, а не на анализ проблем в прошлом.`
        }
    ];
</script>

<style>
    .card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }
</style>

<div class="max-w-5xl mx-auto py-8 px-4">
    <h1 class="text-3xl font-bold mb-8 text-center text-gray-800">
        Мои Методы
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each methods as method}
            <div class="card bg-white shadow-lg rounded-lg p-6">
                <article class="prose text-gray-800">
                    <h2 class="text-xl font-bold mb-4 text-gray-700">
                        {method.title}
                    </h2>
                    <p class="text-gray-700 text-sm">
                        {method.description}
                    </p>
                </article>
            </div>
        {/each}
    </div>
</div>
