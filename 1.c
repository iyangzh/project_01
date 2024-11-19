#include<reg51.h>
void send(unsigned char dat)
{
  SBUF=dat;							//待发送数据写入发送缓冲寄存器
	while(TI==0);					//串口未发送完，等待
		;										//空操作
	TI=0;									//1字节发送完毕，软件将T1标志清零
}
void delay(void)				//延时函数
{
	unsigned char m,n;
	for(m=0;m<250;m++)
	for(n=0;n<250;n++)
	;
}
void main(void)					//主函数
{
	TMOD=0x20;						//设置T1为定时器方式2
	SCON=0x40;						//串行口方式1，TB8=1
	PCON=0x00;
	TH1=0xfd;							//波特率9600
	TL1=0xfd;
	TR1=1;								//启动T1
	while(1){							//循环
		if(T1==0){					//触发SW1
			send(0x01);				//发送01
			delay();
		}
	}
}
