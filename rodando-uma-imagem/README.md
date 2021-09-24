# Comandos básicos


### Executando uma imagem

```
docker run --name webserver -d --rm -p 8080:80 httpd:latest
```

`--name webserver` - nome da imagem (webserver)

`-d` - executa em segundo plano

`--rm` - remove após finalizado

`-p 8080:80` - Direciona a porta do container 80 para a porta da máquina host 80

`httpd:latest` - Nome da imagem e tag identificadora


### Listando os containers em execução

```
docker ps
```


### Parando um container

```
docker kill webserver
```


### Listando todos os containers

```
docker ps -a
```

