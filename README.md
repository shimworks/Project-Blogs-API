# Bem Vindo ao Blogs API
 Este projeto foca principalmente no banco de dados MySQL utilizando ORM junto com a Arquitetura SOLID, além de trabalhar com algumas validações de dados.


# Lista de Requisições
   - 1 -  POST `/user`
      Cria um usuário recebendo:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
   - 2 -  POST `/login`
      Faz login de um usuário existente
  ```json
  {
    "email": "brett@email.com",
    "password": "123456",
  }
  ```
   - 3 -  GET `/user`
      Recebe todos os usuários cadastrados
   - 4 -  GET `/user/:id`
      Recebe os dados de um usuário
   - 5 -  POST `/categories`
      Cria uma categoria de "post"
  ```json
  {
    "name": "Inovação"
  }
  ```
   - 6 -  GET `/categories`
      Recebe categorias criadas
   - 7 -  POST `/post`
      Cria um post com as cateegorias que existem
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```
   - 8 -  GET `/post`
      Recebe todos os post criados
   - 9 -  GET `post/:id`
      Recebe um post
