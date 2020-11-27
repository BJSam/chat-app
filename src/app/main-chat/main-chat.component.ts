import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SService } from '../services/s.service';
@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.scss']
})

export class MainChatComponent implements OnInit {
  CurrentUser: any;
  @ViewChild('msg') msg: ElementRef;
  messages = {
    jhon: [
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Duis occaecat incididunt voluptate pariatur labore veniam consequat duis veniam ad. Incididunt nulla laborum culpa labore cupidatat proident aliquip. Cillum cillum pariatur aute officia magna commodo irure pariatur deserunt ipsum non. Voluptate dolore sint officia exercitation nostrud aute tempor do incididunt ipsum mollit. Aliqua pariatur reprehenderit non velit reprehenderit quis aliqua voluptate proident quis exercitation.',
        DateTime: 'Tue Dec 05 2017 01:59:11 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Id in aliqua pariatur ad nostrud est aliqua. Consectetur exercitation nulla deserunt elit commodo. In anim laboris adipisicing nisi pariatur qui.',
        DateTime: 'Sun Jan 15 2017 20:03:42 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Tempor elit incididunt nulla consectetur irure adipisicing aliquip id laboris sint aute pariatur ad adipisicing. Exercitation veniam cillum Lorem minim dolore ea nostrud mollit ut mollit. Voluptate aliquip mollit commodo magna Lorem est culpa. Proident ut dolor officia dolor do irure labore aliquip magna anim. Ullamco consequat eu elit ullamco enim adipisicing.',
        DateTime: 'Sun May 19 2019 08:31:23 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Cupidatat officia ea et nulla consequat culpa nostrud qui id reprehenderit in. Excepteur est eiusmod esse nulla sit nulla aliqua nisi duis. Tempor sunt ad veniam dolore ipsum.',
        DateTime: 'Mon Jul 27 2020 15:48:55 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Laborum non ad amet eiusmod et anim aliquip ullamco. Ea pariatur nostrud irure pariatur adipisicing nisi nisi Lorem dolor. Elit tempor consectetur cillum esse.',
        DateTime: 'Thu Mar 17 2016 19:51:12 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Labore in ad nisi amet cillum. Sunt enim quis magna aliqua laborum veniam occaecat. Laboris laboris deserunt duis minim do ad eu aliquip aliquip deserunt amet quis. Eiusmod est mollit mollit adipisicing exercitation proident officia minim non deserunt elit reprehenderit irure.',
        DateTime: 'Wed Dec 10 2014 18:19:15 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Sunt commodo ut in velit cupidatat esse. Ex aute pariatur aute sit occaecat proident officia ut ex esse ut sunt cillum. Dolore aute nisi esse anim aute eiusmod elit. Fugiat fugiat elit nisi non. Consectetur dolore pariatur voluptate nulla proident pariatur consequat minim amet.',
        DateTime: 'Tue Jul 21 2015 09:06:49 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Occaecat sunt anim Lorem ut ad. Nostrud aliqua proident duis consequat labore dolore sunt mollit sunt excepteur occaecat anim. Fugiat proident exercitation esse esse voluptate elit anim cupidatat. Irure nulla excepteur eiusmod reprehenderit do enim aliquip occaecat.',
        DateTime: 'Tue Apr 05 2016 09:24:47 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Qui laborum laborum velit exercitation veniam mollit. Anim fugiat irure cillum laborum minim aliqua esse ea proident sit esse. Officia id ex commodo ipsum est nostrud duis non. Officia aute elit officia ea incididunt non voluptate tempor sit tempor. Aliqua aliquip quis laborum labore minim exercitation pariatur. Excepteur nisi velit fugiat nisi.',
        DateTime: 'Fri Sep 19 2014 04:13:53 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Proident labore duis Lorem labore nisi tempor nulla. Reprehenderit excepteur proident cupidatat officia enim consectetur ex non amet excepteur esse sit occaecat ut. Adipisicing amet labore ea dolor ullamco incididunt.',
        DateTime: 'Sun May 28 2017 20:46:27 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Aliquip cupidatat excepteur esse voluptate ea voluptate quis. Sit anim ea ex excepteur in eiusmod exercitation exercitation et eiusmod reprehenderit exercitation. Fugiat id dolore sint id fugiat qui. Veniam ullamco tempor eiusmod id veniam. Pariatur qui duis ut commodo tempor tempor elit adipisicing. Ad sit ipsum exercitation sit Lorem id proident do.',
        DateTime: 'Fri Feb 07 2014 16:39:45 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Ipsum esse culpa duis quis quis velit sunt. Minim ad ipsum est voluptate deserunt cillum quis sit reprehenderit est dolore mollit non reprehenderit. Excepteur mollit nisi ut excepteur aute esse labore in cupidatat. Eu irure commodo enim duis sunt in ullamco quis mollit irure occaecat. Elit sunt Lorem ullamco adipisicing magna sit et elit deserunt adipisicing sint mollit. Veniam cillum anim aute minim enim ea voluptate id ea ipsum enim. Eiusmod velit laborum minim enim aute pariatur fugiat duis sunt.',
        DateTime: 'Sat Feb 21 2015 18:11:55 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Consectetur sit nostrud do tempor. Magna velit excepteur officia consectetur adipisicing quis culpa laborum cillum exercitation fugiat anim. Aliqua eiusmod anim reprehenderit magna qui labore veniam veniam. Laborum enim do eu eu labore ea nisi. Minim eu ullamco incididunt non nulla aliqua eu mollit non quis voluptate. Tempor veniam do nulla occaecat irure do labore.',
        DateTime: 'Mon Mar 10 2014 06:46:13 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Exercitation cupidatat ex ut proident sit. Fugiat commodo nulla sunt et consequat nisi. Magna elit ut occaecat consectetur veniam est id et laborum eu dolore. Minim proident aliqua amet ad veniam. Cupidatat enim est sit consequat exercitation sit sit qui dolore Lorem enim sint.',
        DateTime: 'Sun Feb 02 2020 09:36:24 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Proident culpa sit elit fugiat anim enim non magna exercitation ipsum aliqua. Pariatur cillum Lorem sunt eu consectetur consequat irure eu consectetur enim exercitation. Laborum veniam ullamco veniam exercitation. Pariatur dolore Lorem Lorem Lorem. Aute excepteur ipsum do ut duis tempor esse sit eu esse irure adipisicing.',
        DateTime: 'Fri Apr 29 2016 19:02:54 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Et consequat proident ea est dolor elit sit consequat. Culpa laborum nisi ea aliquip qui labore labore labore magna nulla deserunt sint elit sunt. Culpa excepteur nostrud nulla aute exercitation consectetur.',
        DateTime: 'Sat Jun 21 2014 13:04:38 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Magna duis aute nisi elit amet. Aliquip reprehenderit do consectetur cillum id amet deserunt duis veniam Lorem laborum reprehenderit dolor. Excepteur quis anim duis anim voluptate incididunt. Adipisicing nisi reprehenderit reprehenderit nostrud do eiusmod laborum do non commodo. Officia occaecat aute enim mollit aliqua eiusmod magna nostrud.',
        DateTime: 'Sat Jun 08 2019 04:03:33 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Proident excepteur labore sit do. Nulla sint velit consequat laboris irure enim enim velit ut. Et amet Lorem ad proident dolor ex reprehenderit ad cillum. Velit commodo esse deserunt nostrud anim fugiat ipsum. Nulla magna do consectetur esse occaecat laborum esse nisi tempor anim Lorem.',
        DateTime: 'Wed Jul 03 2019 21:46:10 GMT+0000'
      },
      {
        to: 'joseph',
        from: 'jhon',
        message: 'Quis excepteur aute reprehenderit deserunt. Proident veniam velit nisi labore exercitation. Lorem occaecat id elit aliqua in laboris magna sint et minim. Eu consectetur aliqua do irure laborum magna laborum aute non et. Et aute ex do incididunt irure aute commodo. Et culpa in officia commodo et et do. Est reprehenderit ullamco esse consequat id culpa.',
        DateTime: 'Fri Aug 21 2015 10:12:34 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Quis et deserunt velit non irure consequat cillum. Deserunt cillum sunt magna cupidatat tempor et. Dolor labore nulla aute qui. Esse quis quis aute est magna sint excepteur magna aute culpa. Do dolor reprehenderit qui nostrud. Id esse fugiat quis enim aute reprehenderit sunt esse sit.',
        DateTime: 'Fri Sep 11 2020 23:28:16 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Cillum occaecat commodo aliquip adipisicing culpa proident dolor ipsum exercitation sint reprehenderit. Aliqua minim officia amet in ipsum exercitation non. Lorem exercitation eiusmod sint enim pariatur irure eu anim veniam duis sint est.',
        DateTime: 'Fri Nov 01 2019 10:43:13 GMT+0000'
      },
      {
        to: 'jhon',
        from: 'joseph',
        message: 'Laboris consequat officia qui ea Lorem ad laboris commodo tempor minim commodo anim. Nulla sunt pariatur labore adipisicing exercitation nisi dolore amet eu quis mollit et in ipsum. Reprehenderit excepteur excepteur minim dolore consequat est. Consequat commodo nulla esse consequat elit ut. Consequat nisi veniam incididunt reprehenderit eiusmod elit aliqua adipisicing mollit.',
        DateTime: 'Mon Oct 19 2020 01:36:28 GMT+0000'
      }
    ]
  };
  constructor(public route: Router, private Activeroute: ActivatedRoute, public service: SService) { }

  ngOnInit(): void {
    this.service.recivedMessage.subscribe((data) => {
      if (data){
      if (this.messages.hasOwnProperty(`from||${data.from}`)){
       let msgTag = `from||${data.from}`;
      //  this.messages.msgTag
      }
      }
    });
  }
  isPropPresent = (obj: object, prop) => {
    return obj.hasOwnProperty(prop);
  }
  sendmessage = async () => {
    this.service.sendMessage(
      this.service.currentUser.user,
      this.service.userName,
      this.msg.nativeElement.value)
      .subscribe((val) => {
        console.log(val);
      });
  }
}
