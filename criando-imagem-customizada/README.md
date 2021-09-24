# Criando a imagem

### Dockerfile

[Ver arquivo](./Dockerfile)

```
docker build -t minha-imagenzinha:local .
```

### Rodando a imagem

```
docker run -p 8080:80 minha-imagenzinha:local
```

### Removendo a imagem criada

```
docker image rm minha-imagenzinha:local
```


## [Índice](../README.md)
