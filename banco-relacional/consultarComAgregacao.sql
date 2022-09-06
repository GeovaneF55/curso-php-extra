select
    regiao as 'Regiao',
    sum(populacao) as Total
from estados
group by regiao
order by Total desc;

select
    sum(populacao) as Total
from estados
order by Total desc;

select
    avg(populacao) as Total
from estados
order by Total desc;