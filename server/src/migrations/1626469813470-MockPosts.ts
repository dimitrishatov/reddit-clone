import { MigrationInterface, QueryRunner } from "typeorm";

export class MockPosts1626469813470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`insert into post (title, text, "creatorId", "createdAt") values ('Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.', 'Fusce consequat. Nulla nisl. Nunc nisl.

      Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

      In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2021-01-24T11:51:37Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Nulla justo.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

      Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

      Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2021-05-08T01:20:52Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Nam nulla.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2021-06-29T10:31:17Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Pellentesque at nulla.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2020-11-07T14:26:39Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Duis consequat dui nec nisi volutpat eleifend.', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

      Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2021-07-04T20:19:26Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Phasellus in felis.', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

      Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

      Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2021-06-24T11:34:41Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Nulla mollis molestie lorem.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

      Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

      Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-09-22T16:55:28Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Mauris lacinia sapien quis libero.', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

      Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

      Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2021-04-01T05:13:11Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

      Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2021-02-06T07:24:57Z');
      insert into post (title, text, "creatorId", "createdAt") values ('In sagittis dui vel nisl.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

      Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

      Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-11-06T12:39:35Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Donec vitae nisi.', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-07-26T18:28:38Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

      Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

      Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-09-21T10:42:52Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Maecenas rhoncus aliquam lacus.', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

      Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2020-11-25T05:57:30Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Donec ut dolor.', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2020-10-06T21:25:40Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Morbi a ipsum.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

      Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

      Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-09-03T15:43:03Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

      Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

      Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-08-12T04:56:03Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Nulla justo.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 1, '2021-04-20T08:36:44Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Duis bibendum.', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

      Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2021-01-27T12:19:42Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

      Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-12-16T23:43:33Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Donec dapibus.', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2020-10-22T00:13:01Z');
      insert into post (title, text, "creatorId", "createdAt") values ('In quis justo.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2020-09-07T13:59:38Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Quisque id justo sit amet sapien dignissim vestibulum.', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2021-05-28T03:01:58Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Praesent id massa id nisl venenatis lacinia.', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2021-01-26T04:16:08Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Donec dapibus.', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

      Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-07-30T01:26:06Z');
      insert into post (title, text, "creatorId", "createdAt") values ('In eleifend quam a odio.', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

      In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

      Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2021-04-19T03:05:00Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Maecenas rhoncus aliquam lacus.', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

      Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-09-19T17:34:26Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

      Fusce consequat. Nulla nisl. Nunc nisl.

      Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2021-06-13T02:02:26Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Nullam sit amet turpis elementum ligula vehicula consequat.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

      In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2020-09-19T11:26:25Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

      Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2020-09-05T12:12:45Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Suspendisse ornare consequat lectus.', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2021-04-11T16:16:37Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Pellentesque at nulla.', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-10-27T19:24:33Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Nunc purus.', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

      Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2021-05-30T17:13:47Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Nullam varius.', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2021-01-31T23:09:09Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Integer tincidunt ante vel ipsum.', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2021-03-10T12:22:33Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Nam nulla.', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

      Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2021-03-03T22:20:25Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Nulla justo.', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-12-04T15:14:22Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

      Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2020-10-10T07:12:58Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

      Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2021-06-10T04:54:11Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Aliquam quis turpis eget elit sodales scelerisque.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2021-05-14T10:24:13Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Proin at turpis a pede posuere nonummy.', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2021-06-03T11:57:46Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Morbi non lectus.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2020-08-02T10:53:33Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Donec vitae nisi.', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

      Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2020-12-29T09:33:53Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Suspendisse potenti.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2021-03-30T08:56:25Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Duis consequat dui nec nisi volutpat eleifend.', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

      Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

      Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2021-05-13T06:31:20Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Maecenas rhoncus aliquam lacus.', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2021-01-20T07:23:46Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Proin risus.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-08-20T17:57:19Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Nullam varius.', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

      Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2021-01-03T14:08:16Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Donec quis orci eget orci vehicula condimentum.', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

      In congue. Etiam justo. Etiam pretium iaculis justo.

      In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2021-07-03T00:12:15Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2020-10-09T11:03:22Z');
      insert into post (title, text, "creatorId", "createdAt") values ('Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2021-01-15T22:36:07Z');
  `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
