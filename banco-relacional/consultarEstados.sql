select * from estados;

select sigla, nome as 'Nome do Estado' from estados;

select sigla, nome as 'Nome do Estado' from estados
where regiao = 'Sul';

select sigla, nome as 'Nome do Estado', populacao from estados
where populacao >= 10
order by populacao desc;