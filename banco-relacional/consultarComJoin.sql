select
    e.nome as Estado,
    e.nome as Cidade,
    regiao 
from estados e, cidades c
where e.id = c.estado_id;

select
    e.nome as Estado,
    e.nome as Cidade,
    regiao 
from estados e
inner join cidades c
on e.id = c.estado_id;