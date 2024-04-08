import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://allcommands.top',
  integrations: [
    sitemap(),
    starlight({
    title: '',
    head: [
        {
          tag: 'script',
          attrs: {
            src: '/clarity.js',
            defer: true,
          },
        },
      ],
    logo: {
      light: './src/assets/cli.svg',
      dark: './src/assets/dark-logo.svg'
    },
    social: {
      github: 'https://github.com/alelipona/allcommands.top'
    },
    sidebar: [
    {
        label: 'About',
        link: '/about/'
    },
    {
        label: 'Operating Systems',
        items: [
            {
                label: 'Windows',
                collapsed: true,
                items: [
                    {
                        label: 'APPEND',
                        link: '/os/windows/append/'
                    },
                    {
                        label: 'ARP',
                        link: '/os/windows/arp/'
                    },
                    {
                        label: 'ASSOC',
                        link: '/os/windows/assoc/'
                    },
                    {
                        label: 'AT',
                        link: '/os/windows/at/'
                    },
                    {
                        label: 'ATMADM',
                        link: '/os/windows/atmadm/'
                    },
                    {
                        label: 'ATTRIB',
                        link: '/os/windows/attrib/'
                    },
                    {
                        label: 'AUDITPOL',
                        link: '/os/windows/auditpol/'
                    },
                    {
                        label: 'BCDBOOT',
                        link: '/os/windows/bcdboot/'
                    },
                    {
                        label: 'BCDEDIT',
                        link: '/os/windows/bcdedit/'
                    },
                    {
                        label: 'BDEHDCFG',
                        link: '/os/windows/bdehdcfg/'
                    },
                    {
                        label: 'BITSADMIN',
                        link: '/os/windows/bitsadmin/'
                    },
                    {
                        label: 'BOOTCFG',
                        link: '/os/windows/bootcfg/'
                    },
                    {
                        label: 'BOOTSECT',
                        link: '/os/windows/bootsect/'
                    },
                    {
                        label: 'BREAK',
                        link: '/os/windows/break/'
                    },
                    {
                        label: 'CACLS',
                        link: '/os/windows/cacls/'
                    },
                    {
                        label: 'CALL',
                        link: '/os/windows/call/'
                    },
                    {
                        label: 'CD',
                        link: '/os/windows/cd/'
                    },
                    {
                        label: 'CERTREQ',
                        link: '/os/windows/certreq/'
                    },
                    {
                        label: 'CERTUTIL',
                        link: '/os/windows/certutil/'
                    },
                    {
                        label: 'CHANGE',
                        link: '/os/windows/change/'
                    },
                    {
                        label: 'CHCP',
                        link: '/os/windows/chcp/'
                    },
                    {
                        label: 'CHDIR',
                        link: '/os/windows/chdir/'
                    },
                    {
                        label: 'CHECKNETISOLATION',
                        link: '/os/windows/checknetisolation/'
                    },
                    {
                        label: 'CHGLOGON',
                        link: '/os/windows/chglogon/'
                    },
                    {
                        label: 'CHGPORT',
                        link: '/os/windows/chgport/'
                    },
                    {
                        label: 'CHGUSR',
                        link: '/os/windows/chgusr/'
                    },
                    {
                        label: 'CHKDSK',
                        link: '/os/windows/chkdsk/'
                    },
                    {
                        label: 'CHKNTFS',
                        link: '/os/windows/chkntfs/'
                    },
                    {
                        label: 'CHOICE',
                        link: '/os/windows/choice/'
                    },
                    {
                        label: 'CIPHER',
                        link: '/os/windows/cipher/'
                    },
                    {
                        label: 'CLIP',
                        link: '/os/windows/clip/'
                    },
                    {
                        label: 'CLS',
                        link: '/os/windows/cls/'
                    },
                    {
                        label: 'CMDKEY',
                        link: '/os/windows/cmdkey/'
                    },
                    {
                        label: 'CMSTP',
                        link: '/os/windows/cmstp/'
                    },
                    {
                        label: 'COLOR',
                        link: '/os/windows/color/'
                    },
                    {
                        label: 'COMP',
                        link: '/os/windows/comp/'
                    },
                    {
                        label: 'COMPACT',
                        link: '/os/windows/compact/'
                    },
                    {
                        label: 'CONVERT',
                        link: '/os/windows/convert/'
                    },
                    {
                        label: 'COPY',
                        link: '/os/windows/copy/'
                    },
                    {
                        label: 'CSCRIPT',
                        link: '/os/windows/cscript/'
                    },
                    {
                        label: 'CTTY',
                        link: '/os/windows/ctty/'
                    },
                    {
                        label: 'DATE',
                        link: '/os/windows/date/'
                    },
                    {
                        label: 'DBLSPACE',
                        link: '/os/windows/dblspace/'
                    },
                    {
                        label: 'DEBUG',
                        link: '/os/windows/debug/'
                    },
                    {
                        label: 'DEFRAG',
                        link: '/os/windows/defrag/'
                    },
                    {
                        label: 'DEL',
                        link: '/os/windows/del/'
                    },
                    {
                        label: 'DELTREE',
                        link: '/os/windows/deltree/'
                    },
                    {
                        label: 'DIANTZ',
                        link: '/os/windows/diantz/'
                    },
                    {
                        label: 'DIR',
                        link: '/os/windows/dir/'
                    },
                    {
                        label: 'DISKCOMP',
                        link: '/os/windows/diskcomp/'
                    },
                    {
                        label: 'DISKCOPY',
                        link: '/os/windows/diskcopy/'
                    },
                    {
                        label: 'DISKPART',
                        link: '/os/windows/diskpart/'
                    },
                    {
                        label: 'DISKPERF',
                        link: '/os/windows/diskperf/'
                    },
                    {
                        label: 'DISKRAID',
                        link: '/os/windows/diskraid/'
                    },
                    {
                        label: 'DISM',
                        link: '/os/windows/dism/'
                    },
                    {
                        label: 'DISPDIAG',
                        link: '/os/windows/dispdiag/'
                    },
                    {
                        label: 'DJOIN',
                        link: '/os/windows/djoin/'
                    },
                    {
                        label: 'DOSKEY',
                        link: '/os/windows/doskey/'
                    },
                    {
                        label: 'DOSSHELL',
                        link: '/os/windows/dosshell/'
                    },
                    {
                        label: 'DOSX',
                        link: '/os/windows/dosx/'
                    },
                    {
                        label: 'DRIVERQUERY',
                        link: '/os/windows/driverquery/'
                    },
                    {
                        label: 'DRVSPACE',
                        link: '/os/windows/drvspace/'
                    },
                    {
                        label: 'ECHO',
                        link: '/os/windows/echo/'
                    },
                    {
                        label: 'EDIT',
                        link: '/os/windows/edit/'
                    },
                    {
                        label: 'EDLIN',
                        link: '/os/windows/edlin/'
                    },
                    {
                        label: 'EMM386',
                        link: '/os/windows/emm386/'
                    },
                    {
                        label: 'ENDLOCAL',
                        link: '/os/windows/endlocal/'
                    },
                    {
                        label: 'ERASE',
                        link: '/os/windows/erase/'
                    },
                    {
                        label: 'ESENTUTL',
                        link: '/os/windows/esentutl/'
                    },
                    {
                        label: 'EVENTCREATE',
                        link: '/os/windows/eventcreate/'
                    },
                    {
                        label: 'EVENTTRIGGERS',
                        link: '/os/windows/eventtriggers/'
                    },
                    {
                        label: 'EXE2BIN',
                        link: '/os/windows/exe2bin/'
                    },
                    {
                        label: 'EXIT',
                        link: '/os/windows/exit/'
                    },
                    {
                        label: 'EXPAND',
                        link: '/os/windows/expand/'
                    },
                    {
                        label: 'EXTRAC32',
                        link: '/os/windows/extrac32/'
                    },
                    {
                        label: 'EXTRACT',
                        link: '/os/windows/extract/'
                    },
                    {
                        label: 'FASTHELP',
                        link: '/os/windows/fasthelp/'
                    },
                    {
                        label: 'FASTOPEN',
                        link: '/os/windows/fastopen/'
                    },
                    {
                        label: 'FC',
                        link: '/os/windows/fc/'
                    },
                    {
                        label: 'FDISK',
                        link: '/os/windows/fdisk/'
                    },
                    {
                        label: 'FIND',
                        link: '/os/windows/find/'
                    },
                    {
                        label: 'FINDSTR',
                        link: '/os/windows/findstr/'
                    },
                    {
                        label: 'FINGER',
                        link: '/os/windows/finger/'
                    },
                    {
                        label: 'FLTMC',
                        link: '/os/windows/fltmc/'
                    },
                    {
                        label: 'FONDUE',
                        link: '/os/windows/fondue/'
                    },
                    {
                        label: 'FOR',
                        link: '/os/windows/for/'
                    },
                    {
                        label: 'FORCEDOS',
                        link: '/os/windows/forcedos/'
                    },
                    {
                        label: 'FORFILES',
                        link: '/os/windows/forfiles/'
                    },
                    {
                        label: 'FORMAT',
                        link: '/os/windows/format/'
                    },
                    {
                        label: 'FSUTIL',
                        link: '/os/windows/fsutil/'
                    },
                    {
                        label: 'FTP',
                        link: '/os/windows/ftp/'
                    },
                    {
                        label: 'FTYPE',
                        link: '/os/windows/ftype/'
                    },
                    {
                        label: 'GETMAC',
                        link: '/os/windows/getmac/'
                    },
                    {
                        label: 'GOTO',
                        link: '/os/windows/goto/'
                    },
                    {
                        label: 'GPRESULT',
                        link: '/os/windows/gpresult/'
                    },
                    {
                        label: 'GPUPDATE',
                        link: '/os/windows/gpupdate/'
                    },
                    {
                        label: 'GRAFTABL',
                        link: '/os/windows/graftabl/'
                    },
                    {
                        label: 'GRAPHICS',
                        link: '/os/windows/graphics/'
                    },
                    {
                        label: 'HELP',
                        link: '/os/windows/help/'
                    },
                    {
                        label: 'HOSTNAME',
                        link: '/os/windows/hostname/'
                    },
                    {
                        label: 'HWRCOMP',
                        link: '/os/windows/hwrcomp/'
                    },
                    {
                        label: 'HWRREG',
                        link: '/os/windows/hwrreg/'
                    },
                    {
                        label: 'ICACLS',
                        link: '/os/windows/icacls/'
                    },
                    {
                        label: 'IF',
                        link: '/os/windows/if/'
                    },
                    {
                        label: 'INTERLNK',
                        link: '/os/windows/interlnk/'
                    },
                    {
                        label: 'INTERSVR',
                        link: '/os/windows/intersvr/'
                    },
                    {
                        label: 'IPCONFIG',
                        link: '/os/windows/ipconfig/'
                    },
                    {
                        label: 'IPXROUTE',
                        link: '/os/windows/ipxroute/'
                    },
                    {
                        label: 'IRFTP',
                        link: '/os/windows/irftp/'
                    },
                    {
                        label: 'ISCSICLI',
                        link: '/os/windows/iscsicli/'
                    },
                    {
                        label: 'KB16',
                        link: '/os/windows/kb16/'
                    },
                    {
                        label: 'KEYB',
                        link: '/os/windows/keyb/'
                    },
                    {
                        label: 'KLIST',
                        link: '/os/windows/klist/'
                    },
                    {
                        label: 'KSETUP',
                        link: '/os/windows/ksetup/'
                    },
                    {
                        label: 'KTMUTIL',
                        link: '/os/windows/ktmutil/'
                    },
                    {
                        label: 'LABEL',
                        link: '/os/windows/label/'
                    },
                    {
                        label: 'LH',
                        link: '/os/windows/lh/'
                    },
                    {
                        label: 'LICENSINGDIAG',
                        link: '/os/windows/licensingdiag/'
                    },
                    {
                        label: 'LOADFIX',
                        link: '/os/windows/loadfix/'
                    },
                    {
                        label: 'LOADHIGH',
                        link: '/os/windows/loadhigh/'
                    },
                    {
                        label: 'LOCK',
                        link: '/os/windows/lock/'
                    },
                    {
                        label: 'LODCTR',
                        link: '/os/windows/lodctr/'
                    },
                    {
                        label: 'LOGMAN',
                        link: '/os/windows/logman/'
                    },
                    {
                        label: 'LOGOFF',
                        link: '/os/windows/logoff/'
                    },
                    {
                        label: 'LPQ',
                        link: '/os/windows/lpq/'
                    },
                    {
                        label: 'LPR',
                        link: '/os/windows/lpr/'
                    },
                    {
                        label: 'MAKECAB',
                        link: '/os/windows/makecab/'
                    },
                    {
                        label: 'MANAGE-BDE',
                        link: '/os/windows/manage-bde/'
                    },
                    {
                        label: 'MD',
                        link: '/os/windows/md/'
                    },
                    {
                        label: 'MEM',
                        link: '/os/windows/mem/'
                    },
                    {
                        label: 'MEMMAKER',
                        link: '/os/windows/memmaker/'
                    },
                    {
                        label: 'MKDIR',
                        link: '/os/windows/mkdir/'
                    },
                    {
                        label: 'MKLINK',
                        link: '/os/windows/mklink/'
                    },
                    {
                        label: 'MODE',
                        link: '/os/windows/mode/'
                    },
                    {
                        label: 'MOFCOMP',
                        link: '/os/windows/mofcomp/'
                    },
                    {
                        label: 'MORE',
                        link: '/os/windows/more/'
                    },
                    {
                        label: 'MOUNT',
                        link: '/os/windows/mount/'
                    },
                    {
                        label: 'MOUNTVOL',
                        link: '/os/windows/mountvol/'
                    },
                    {
                        label: 'MOVE',
                        link: '/os/windows/move/'
                    },
                    {
                        label: 'MRINFO',
                        link: '/os/windows/mrinfo/'
                    },
                    {
                        label: 'MSAV',
                        link: '/os/windows/msav/'
                    },
                    {
                        label: 'MSBACKUP',
                        link: '/os/windows/msbackup/'
                    },
                    {
                        label: 'MSCDEX',
                        link: '/os/windows/mscdex/'
                    },
                    {
                        label: 'MSD',
                        link: '/os/windows/msd/'
                    },
                    {
                        label: 'MSG',
                        link: '/os/windows/msg/'
                    },
                    {
                        label: 'MSIEXEC',
                        link: '/os/windows/msiexec/'
                    },
                    {
                        label: 'MUIUNATTEND',
                        link: '/os/windows/muiunattend/'
                    },
                    {
                        label: 'NBTSTAT',
                        link: '/os/windows/nbtstat/'
                    },
                    {
                        label: 'NET',
                        link: '/os/windows/net/'
                    },
                    {
                        label: 'NET1',
                        link: '/os/windows/net1/'
                    },
                    {
                        label: 'NETCFG',
                        link: '/os/windows/netcfg/'
                    },
                    {
                        label: 'NETSH',
                        link: '/os/windows/netsh/'
                    },
                    {
                        label: 'NETSTAT',
                        link: '/os/windows/netstat/'
                    },
                    {
                        label: 'NFSADMIN',
                        link: '/os/windows/nfsadmin/'
                    },
                    {
                        label: 'NLSFUNC',
                        link: '/os/windows/nlsfunc/'
                    },
                    {
                        label: 'NLTEST',
                        link: '/os/windows/nltest/'
                    },
                    {
                        label: 'NSLOOKUP',
                        link: '/os/windows/nslookup/'
                    },
                    {
                        label: 'NTBACKUP',
                        link: '/os/windows/ntbackup/'
                    },
                    {
                        label: 'NTSD',
                        link: '/os/windows/ntsd/'
                    },
                    {
                        label: 'OCSETUP',
                        link: '/os/windows/ocsetup/'
                    },
                    {
                        label: 'OPENFILES',
                        link: '/os/windows/openfiles/'
                    },
                    {
                        label: 'PATH',
                        link: '/os/windows/path/'
                    },
                    {
                        label: 'PATHPING',
                        link: '/os/windows/pathping/'
                    },
                    {
                        label: 'PAUSE',
                        link: '/os/windows/pause/'
                    },
                    {
                        label: 'PENTNT',
                        link: '/os/windows/pentnt/'
                    },
                    {
                        label: 'PING',
                        link: '/os/windows/ping/'
                    },
                    {
                        label: 'PKGMGR',
                        link: '/os/windows/pkgmgr/'
                    },
                    {
                        label: 'PNPUNATTEND',
                        link: '/os/windows/pnpunattend/'
                    },
                    {
                        label: 'PNPUTIL',
                        link: '/os/windows/pnputil/'
                    },
                    {
                        label: 'POPD',
                        link: '/os/windows/popd/'
                    },
                    {
                        label: 'POWER',
                        link: '/os/windows/power/'
                    },
                    {
                        label: 'POWERCFG',
                        link: '/os/windows/powercfg/'
                    },
                    {
                        label: 'PRINT',
                        link: '/os/windows/print/'
                    },
                    {
                        label: 'PROMPT',
                        link: '/os/windows/prompt/'
                    },
                    {
                        label: 'PUSHD',
                        link: '/os/windows/pushd/'
                    },
                    {
                        label: 'PWLAUNCHER',
                        link: '/os/windows/pwlauncher/'
                    },
                    {
                        label: 'QAPPSRV',
                        link: '/os/windows/qappsrv/'
                    },
                    {
                        label: 'QBASIC',
                        link: '/os/windows/qbasic/'
                    },
                    {
                        label: 'QPROCESS',
                        link: '/os/windows/qprocess/'
                    },
                    {
                        label: 'QUERY',
                        link: '/os/windows/query/'
                    },
                    {
                        label: 'QUSER',
                        link: '/os/windows/quser/'
                    },
                    {
                        label: 'QWINSTA',
                        link: '/os/windows/qwinsta/'
                    },
                    {
                        label: 'RASAUTOU',
                        link: '/os/windows/rasautou/'
                    },
                    {
                        label: 'RASDIAL',
                        link: '/os/windows/rasdial/'
                    },
                    {
                        label: 'RCP',
                        link: '/os/windows/rcp/'
                    },
                    {
                        label: 'RD',
                        link: '/os/windows/rd/'
                    },
                    {
                        label: 'RDPSIGN',
                        link: '/os/windows/rdpsign/'
                    },
                    {
                        label: 'REAGENTC',
                        link: '/os/windows/reagentc/'
                    },
                    {
                        label: 'RECIMG',
                        link: '/os/windows/recimg/'
                    },
                    {
                        label: 'RECOVER',
                        link: '/os/windows/recover/'
                    },
                    {
                        label: 'REG',
                        link: '/os/windows/reg/'
                    },
                    {
                        label: 'REGINI',
                        link: '/os/windows/regini/'
                    },
                    {
                        label: 'REGISTER-CIMPROVIDER',
                        link: '/os/windows/register-cimprovider/'
                    },
                    {
                        label: 'REGSVR32',
                        link: '/os/windows/regsvr32/'
                    },
                    {
                        label: 'RELOG',
                        link: '/os/windows/relog/'
                    },
                    {
                        label: 'REM',
                        link: '/os/windows/rem/'
                    },
                    {
                        label: 'REN',
                        link: '/os/windows/ren/'
                    },
                    {
                        label: 'RENAME',
                        link: '/os/windows/rename/'
                    },
                    {
                        label: 'REPAIR-BDE',
                        link: '/os/windows/repair-bde/'
                    },
                    {
                        label: 'REPLACE',
                        link: '/os/windows/replace/'
                    },
                    {
                        label: 'RESET',
                        link: '/os/windows/reset/'
                    },
                    {
                        label: 'RESTORE',
                        link: '/os/windows/restore/'
                    },
                    {
                        label: 'REXEC',
                        link: '/os/windows/rexec/'
                    },
                    {
                        label: 'RMDIR',
                        link: '/os/windows/rmdir/'
                    },
                    {
                        label: 'ROBOCOPY',
                        link: '/os/windows/robocopy/'
                    },
                    {
                        label: 'ROUTE',
                        link: '/os/windows/route/'
                    },
                    {
                        label: 'RPCINFO',
                        link: '/os/windows/rpcinfo/'
                    },
                    {
                        label: 'RPCPING',
                        link: '/os/windows/rpcping/'
                    },
                    {
                        label: 'RSH',
                        link: '/os/windows/rsh/'
                    },
                    {
                        label: 'RSM',
                        link: '/os/windows/rsm/'
                    },
                    {
                        label: 'RUNAS',
                        link: '/os/windows/runas/'
                    },
                    {
                        label: 'RWINSTA',
                        link: '/os/windows/rwinsta/'
                    },
                    {
                        label: 'SC',
                        link: '/os/windows/sc/'
                    },
                    {
                        label: 'SCANDISK',
                        link: '/os/windows/scandisk/'
                    },
                    {
                        label: 'SCANREG',
                        link: '/os/windows/scanreg/'
                    },
                    {
                        label: 'SCHTASKS',
                        link: '/os/windows/schtasks/'
                    },
                    {
                        label: 'SDBINST',
                        link: '/os/windows/sdbinst/'
                    },
                    {
                        label: 'SECEDIT',
                        link: '/os/windows/secedit/'
                    },
                    {
                        label: 'SET',
                        link: '/os/windows/set/'
                    },
                    {
                        label: 'SETLOCAL',
                        link: '/os/windows/setlocal/'
                    },
                    {
                        label: 'SETSPN',
                        link: '/os/windows/setspn/'
                    },
                    {
                        label: 'SETVER',
                        link: '/os/windows/setver/'
                    },
                    {
                        label: 'SETX',
                        link: '/os/windows/setx/'
                    },
                    {
                        label: 'SFC',
                        link: '/os/windows/sfc/'
                    },
                    {
                        label: 'SHADOW',
                        link: '/os/windows/shadow/'
                    },
                    {
                        label: 'SHARE',
                        link: '/os/windows/share/'
                    },
                    {
                        label: 'SHIFT',
                        link: '/os/windows/shift/'
                    },
                    {
                        label: 'SHOWMOUNT',
                        link: '/os/windows/showmount/'
                    },
                    {
                        label: 'SHUTDOWN',
                        link: '/os/windows/shutdown/'
                    },
                    {
                        label: 'SMARTDRV',
                        link: '/os/windows/smartdrv/'
                    },
                    {
                        label: 'SORT',
                        link: '/os/windows/sort/'
                    },
                    {
                        label: 'START',
                        link: '/os/windows/start/'
                    },
                    {
                        label: 'SUBST',
                        link: '/os/windows/subst/'
                    },
                    {
                        label: 'SXSTRACE',
                        link: '/os/windows/sxstrace/'
                    },
                    {
                        label: 'SYS',
                        link: '/os/windows/sys/'
                    },
                    {
                        label: 'SYSTEMINFO',
                        link: '/os/windows/systeminfo/'
                    },
                    {
                        label: 'TAKEOWN',
                        link: '/os/windows/takeown/'
                    },
                    {
                        label: 'TASKKILL',
                        link: '/os/windows/taskkill/'
                    },
                    {
                        label: 'TASKLIST',
                        link: '/os/windows/tasklist/'
                    },
                    {
                        label: 'TCMSETUP',
                        link: '/os/windows/tcmsetup/'
                    },
                    {
                        label: 'TELNET',
                        link: '/os/windows/telnet/'
                    },
                    {
                        label: 'TFTP',
                        link: '/os/windows/tftp/'
                    },
                    {
                        label: 'TIME',
                        link: '/os/windows/time/'
                    },
                    {
                        label: 'TIMEOUT',
                        link: '/os/windows/timeout/'
                    },
                    {
                        label: 'TITLE',
                        link: '/os/windows/title/'
                    },
                    {
                        label: 'TLNTADMN',
                        link: '/os/windows/tlntadmn/'
                    },
                    {
                        label: 'TPMVSCMGR',
                        link: '/os/windows/tpmvscmgr/'
                    },
                    {
                        label: 'TRACERPT',
                        link: '/os/windows/tracerpt/'
                    },
                    {
                        label: 'TRACERT',
                        link: '/os/windows/tracert/'
                    },
                    {
                        label: 'TREE',
                        link: '/os/windows/tree/'
                    },
                    {
                        label: 'TSCON',
                        link: '/os/windows/tscon/'
                    },
                    {
                        label: 'TSDISCON',
                        link: '/os/windows/tsdiscon/'
                    },
                    {
                        label: 'TSKILL',
                        link: '/os/windows/tskill/'
                    },
                    {
                        label: 'TSSHUTDN',
                        link: '/os/windows/tsshutdn/'
                    },
                    {
                        label: 'TYPE',
                        link: '/os/windows/type/'
                    },
                    {
                        label: 'TYPEPERF',
                        link: '/os/windows/typeperf/'
                    },
                    {
                        label: 'TZUTIL',
                        link: '/os/windows/tzutil/'
                    },
                    {
                        label: 'UMOUNT',
                        link: '/os/windows/umount/'
                    },
                    {
                        label: 'UNDELETE',
                        link: '/os/windows/undelete/'
                    },
                    {
                        label: 'UNFORMAT',
                        link: '/os/windows/unformat/'
                    },
                    {
                        label: 'UNLOCK',
                        link: '/os/windows/unlock/'
                    },
                    {
                        label: 'UNLODCTR',
                        link: '/os/windows/unlodctr/'
                    },
                    {
                        label: 'VAULTCMD',
                        link: '/os/windows/vaultcmd/'
                    },
                    {
                        label: 'VER',
                        link: '/os/windows/ver/'
                    },
                    {
                        label: 'VERIFY',
                        link: '/os/windows/verify/'
                    },
                    {
                        label: 'VOL',
                        link: '/os/windows/vol/'
                    },
                    {
                        label: 'VSAFE',
                        link: '/os/windows/vsafe/'
                    },
                    {
                        label: 'VSSADMIN',
                        link: '/os/windows/vssadmin/'
                    },
                    {
                        label: 'W32TM',
                        link: '/os/windows/w32tm/'
                    },
                    {
                        label: 'WAITFOR',
                        link: '/os/windows/waitfor/'
                    },
                    {
                        label: 'WBADMIN',
                        link: '/os/windows/wbadmin/'
                    },
                    {
                        label: 'WECUTIL',
                        link: '/os/windows/wecutil/'
                    },
                    {
                        label: 'WEVTUTIL',
                        link: '/os/windows/wevtutil/'
                    },
                    {
                        label: 'WHERE',
                        link: '/os/windows/where/'
                    },
                    {
                        label: 'WHOAMI',
                        link: '/os/windows/whoami/'
                    },
                    {
                        label: 'WINMGMT',
                        link: '/os/windows/winmgmt/'
                    },
                    {
                        label: 'WINRM',
                        link: '/os/windows/winrm/'
                    },
                    {
                        label: 'WINRS',
                        link: '/os/windows/winrs/'
                    },
                    {
                        label: 'WINSAT',
                        link: '/os/windows/winsat/'
                    },
                    {
                        label: 'WMIC',
                        link: '/os/windows/wmic/'
                    },
                    {
                        label: 'WSMANHTTPCONFIG',
                        link: '/os/windows/wsmanhttpconfig/'
                    },
                    {
                        label: 'XCOPY',
                        link: '/os/windows/xcopy/'
                    },
                    {
                        label: 'XWIZARD',
                        link: '/os/windows/xwizard/'
                    }, ], },
            {
                label: 'Linux',
                collapsed: true,
                items: [
                    {
                        label: 'alias',
                        link: '/os/linux/alias/'
                    },
                    {
                        label: 'anacron',
                        link: '/os/linux/anacron/'
                    },
                    {
                        label: 'apropos',
                        link: '/os/linux/apropos/'
                    },
                    {
                        label: 'arp',
                        link: '/os/linux/arp/'
                    },
                    {
                        label: 'arping',
                        link: '/os/linux/arping/'
                    },
                    {
                        label: 'at',
                        link: '/os/linux/at/'
                    },
                    {
                        label: 'awk',
                        link: '/os/linux/awk/'
                    },
                    {
                        label: 'basename',
                        link: '/os/linux/basename/'
                    },
                    {
                        label: 'bash',
                        link: '/os/linux/bash/'
                    },
                    {
                        label: 'bc',
                        link: '/os/linux/bc/'
                    },
                    {
                        label: 'bg',
                        link: '/os/linux/bg/'
                    },
                    {
                        label: 'blkid',
                        link: '/os/linux/blkid/'
                    },
                    {
                        label: 'break',
                        link: '/os/linux/break/'
                    },
                    {
                        label: 'bzip2',
                        link: '/os/linux/bzip2/'
                    },
                    {
                        label: 'cal',
                        link: '/os/linux/cal/'
                    },
                    {
                        label: 'cat',
                        link: '/os/linux/cat/'
                    },
                    {
                        label: 'cd',
                        link: '/os/linux/cd/'
                    },
                    {
                        label: 'chaosreader',
                        link: '/os/linux/chaosreader/'
                    },
                    {
                        label: 'chattr',
                        link: '/os/linux/chattr/'
                    },
                    {
                        label: 'chfn',
                        link: '/os/linux/chfn/'
                    },
                    {
                        label: 'chgrp',
                        link: '/os/linux/chgrp/'
                    },
                    {
                        label: 'chmod',
                        link: '/os/linux/chmod/'
                    },
                    {
                        label: 'chown',
                        link: '/os/linux/chown/'
                    },
                    {
                        label: 'chpasswd',
                        link: '/os/linux/chpasswd/'
                    },
                    {
                        label: 'chsh',
                        link: '/os/linux/chsh/'
                    },
                    {
                        label: 'cksum',
                        link: '/os/linux/cksum/'
                    },
                    {
                        label: 'clear',
                        link: '/os/linux/clear/'
                    },
                    {
                        label: 'cmp',
                        link: '/os/linux/cmp/'
                    },
                    {
                        label: 'comm',
                        link: '/os/linux/comm/'
                    },
                    {
                        label: 'convert',
                        link: '/os/linux/convert/'
                    },
                    {
                        label: 'cp',
                        link: '/os/linux/cp/'
                    },
                    {
                        label: 'crontab',
                        link: '/os/linux/crontab/'
                    },
                    {
                        label: 'curl',
                        link: '/os/linux/curl/'
                    },
                    {
                        label: 'cut',
                        link: '/os/linux/cut/'
                    },
                    {
                        label: 'date',
                        link: '/os/linux/date/'
                    },
                    {
                        label: 'dc',
                        link: '/os/linux/dc/'
                    },
                    {
                        label: 'dd',
                        link: '/os/linux/dd/'
                    },
                    {
                        label: 'df',
                        link: '/os/linux/df/'
                    },
                    {
                        label: 'diff',
                        link: '/os/linux/diff/'
                    },
                    {
                        label: 'dig',
                        link: '/os/linux/dig/'
                    },
                    {
                        label: 'dirname',
                        link: '/os/linux/dirname/'
                    },
                    {
                        label: 'dirs',
                        link: '/os/linux/dirs/'
                    },
                    {
                        label: 'disown',
                        link: '/os/linux/disown/'
                    },
                    {
                        label: 'dmesg',
                        link: '/os/linux/dmesg/'
                    },
                    {
                        label: 'dmidecode',
                        link: '/os/linux/dmidecode/'
                    },
                    {
                        label: 'dnsdomainname',
                        link: '/os/linux/dnsdomainname/'
                    },
                    {
                        label: 'done',
                        link: '/os/linux/done/'
                    },
                    {
                        label: 'du',
                        link: '/os/linux/du/'
                    },
                    {
                        label: 'echo',
                        link: '/os/linux/echo/'
                    },
                    {
                        label: 'egrep',
                        link: '/os/linux/egrep/'
                    },
                    {
                        label: 'eject',
                        link: '/os/linux/eject/'
                    },
                    {
                        label: 'elinks',
                        link: '/os/linux/elinks/'
                    },
                    {
                        label: 'env',
                        link: '/os/linux/env/'
                    },
                    {
                        label: 'exit',
                        link: '/os/linux/exit/'
                    },
                    {
                        label: 'expand',
                        link: '/os/linux/expand/'
                    },
                    {
                        label: 'expect',
                        link: '/os/linux/expect/'
                    },
                    {
                        label: 'export',
                        link: '/os/linux/export/'
                    },
                    {
                        label: 'expr',
                        link: '/os/linux/expr/'
                    },
                    {
                        label: 'factor',
                        link: '/os/linux/factor/'
                    },
                    {
                        label: 'fdisk',
                        link: '/os/linux/fdisk/'
                    },
                    {
                        label: 'fg',
                        link: '/os/linux/fg/'
                    },
                    {
                        label: 'fgrep',
                        link: '/os/linux/fgrep/'
                    },
                    {
                        label: 'file',
                        link: '/os/linux/file/'
                    },
                    {
                        label: 'find',
                        link: '/os/linux/find/'
                    },
                    {
                        label: 'finger',
                        link: '/os/linux/finger/'
                    },
                    {
                        label: 'fmt',
                        link: '/os/linux/fmt/'
                    },
                    {
                        label: 'for',
                        link: '/os/linux/for/'
                    },
                    {
                        label: 'fping',
                        link: '/os/linux/fping/'
                    },
                    {
                        label: 'free',
                        link: '/os/linux/free/'
                    },
                    {
                        label: 'fsck',
                        link: '/os/linux/fsck/'
                    },
                    {
                        label: 'ftp',
                        link: '/os/linux/ftp/'
                    },
                    {
                        label: 'fuser',
                        link: '/os/linux/fuser/'
                    },
                    {
                        label: 'gawk',
                        link: '/os/linux/gawk/'
                    },
                    {
                        label: 'gdb',
                        link: '/os/linux/gdb/'
                    },
                    {
                        label: 'grep',
                        link: '/os/linux/grep/'
                    },
                    {
                        label: 'groupadd',
                        link: '/os/linux/groupadd/'
                    },
                    {
                        label: 'groupdel',
                        link: '/os/linux/groupdel/'
                    },
                    {
                        label: 'groupmod',
                        link: '/os/linux/groupmod/'
                    },
                    {
                        label: 'groups',
                        link: '/os/linux/groups/'
                    },
                    {
                        label: 'gunzip',
                        link: '/os/linux/gunzip/'
                    },
                    {
                        label: 'gzip',
                        link: '/os/linux/gzip/'
                    },
                    {
                        label: 'hash',
                        link: '/os/linux/hash/'
                    },
                    {
                        label: 'hdparm',
                        link: '/os/linux/hdparm/'
                    },
                    {
                        label: 'head',
                        link: '/os/linux/head/'
                    },
                    {
                        label: 'help',
                        link: '/os/linux/help/'
                    },
                    {
                        label: 'hexdump',
                        link: '/os/linux/hexdump/'
                    },
                    {
                        label: 'history',
                        link: '/os/linux/history/'
                    },
                    {
                        label: 'host',
                        link: '/os/linux/host/'
                    },
                    {
                        label: 'hostname',
                        link: '/os/linux/hostname/'
                    },
                    {
                        label: 'hping',
                        link: '/os/linux/hping/'
                    },
                    {
                        label: 'htop',
                        link: '/os/linux/htop/'
                    },
                    {
                        label: 'iconv',
                        link: '/os/linux/iconv/'
                    },
                    {
                        label: 'id',
                        link: '/os/linux/id/'
                    },
                    {
                        label: 'ifconfig',
                        link: '/os/linux/ifconfig/'
                    },
                    {
                        label: 'iftop',
                        link: '/os/linux/iftop/'
                    },
                    {
                        label: 'info',
                        link: '/os/linux/info/'
                    },
                    {
                        label: 'insmod',
                        link: '/os/linux/insmod/'
                    },
                    {
                        label: 'ip',
                        link: '/os/linux/ip/'
                    },
                    {
                        label: 'jobs',
                        link: '/os/linux/jobs/'
                    },
                    {
                        label: 'join',
                        link: '/os/linux/join/'
                    },
                    {
                        label: 'kill',
                        link: '/os/linux/kill/'
                    },
                    {
                        label: 'killall',
                        link: '/os/linux/killall/'
                    },
                    {
                        label: 'less',
                        link: '/os/linux/less/'
                    },
                    {
                        label: 'links',
                        link: '/os/linux/links/'
                    },
                    {
                        label: 'ln',
                        link: '/os/linux/ln/'
                    },
                    {
                        label: 'locate',
                        link: '/os/linux/locate/'
                    },
                    {
                        label: 'logname',
                        link: '/os/linux/logname/'
                    },
                    {
                        label: 'logout',
                        link: '/os/linux/logout/'
                    },
                    {
                        label: 'logrotate',
                        link: '/os/linux/logrotate/'
                    },
                    {
                        label: 'look',
                        link: '/os/linux/look/'
                    },
                    {
                        label: 'ls',
                        link: '/os/linux/ls/'
                    },
                    {
                        label: 'lsattr',
                        link: '/os/linux/lsattr/'
                    },
                    {
                        label: 'lsblk',
                        link: '/os/linux/lsblk/'
                    },
                    {
                        label: 'lscpu',
                        link: '/os/linux/lscpu/'
                    },
                    {
                        label: 'lsmod',
                        link: '/os/linux/lsmod/'
                    },
                    {
                        label: 'lsof',
                        link: '/os/linux/lsof/'
                    },
                    {
                        label: 'lspci',
                        link: '/os/linux/lspci/'
                    },
                    {
                        label: 'lsusb',
                        link: '/os/linux/lsusb/'
                    },
                    {
                        label: 'ltrace',
                        link: '/os/linux/ltrace/'
                    },
                    {
                        label: 'lynx',
                        link: '/os/linux/lynx/'
                    },
                    {
                        label: 'mail',
                        link: '/os/linux/mail/'
                    },
                    {
                        label: 'man',
                        link: '/os/linux/man/'
                    },
                    {
                        label: 'md5sum',
                        link: '/os/linux/md5sum/'
                    },
                    {
                        label: 'mesg',
                        link: '/os/linux/mesg/'
                    },
                    {
                        label: 'mkdir',
                        link: '/os/linux/mkdir/'
                    },
                    {
                        label: 'mkfifo',
                        link: '/os/linux/mkfifo/'
                    },
                    {
                        label: 'mkfs',
                        link: '/os/linux/mkfs/'
                    },
                    {
                        label: 'mmv',
                        link: '/os/linux/mmv/'
                    },
                    {
                        label: 'modprobe',
                        link: '/os/linux/modprobe/'
                    },
                    {
                        label: 'mogrify',
                        link: '/os/linux/mogrify/'
                    },
                    {
                        label: 'more',
                        link: '/os/linux/more/'
                    },
                    {
                        label: 'mount',
                        link: '/os/linux/mount/'
                    },
                    {
                        label: 'mtr',
                        link: '/os/linux/mtr/'
                    },
                    {
                        label: 'mutt',
                        link: '/os/linux/mutt/'
                    },
                    {
                        label: 'mv',
                        link: '/os/linux/mv/'
                    },
                    {
                        label: 'nc',
                        link: '/os/linux/nc/'
                    },
                    {
                        label: 'ncat',
                        link: '/os/linux/ncat/'
                    },
                    {
                        label: 'netcat',
                        link: '/os/linux/netcat/'
                    },
                    {
                        label: 'netstat',
                        link: '/os/linux/netstat/'
                    },
                    {
                        label: 'nice',
                        link: '/os/linux/nice/'
                    },
                    {
                        label: 'nl',
                        link: '/os/linux/nl/'
                    },
                    {
                        label: 'nm',
                        link: '/os/linux/nm/'
                    },
                    {
                        label: 'nohup',
                        link: '/os/linux/nohup/'
                    },
                    {
                        label: 'nping',
                        link: '/os/linux/nping/'
                    },
                    {
                        label: 'nslookup',
                        link: '/os/linux/nslookup/'
                    },
                    {
                        label: 'objdump',
                        link: '/os/linux/objdump/'
                    },
                    {
                        label: 'od',
                        link: '/os/linux/od/'
                    },
                    {
                        label: 'openssl',
                        link: '/os/linux/openssl/'
                    },
                    {
                        label: 'parted',
                        link: '/os/linux/parted/'
                    },
                    {
                        label: 'passwd',
                        link: '/os/linux/passwd/'
                    },
                    {
                        label: 'paste',
                        link: '/os/linux/paste/'
                    },
                    {
                        label: 'pax',
                        link: '/os/linux/pax/'
                    },
                    {
                        label: 'ping',
                        link: '/os/linux/ping/'
                    },
                    {
                        label: 'ping6',
                        link: '/os/linux/ping6/'
                    },
                    {
                        label: 'pkill',
                        link: '/os/linux/pkill/'
                    },
                    {
                        label: 'popd',
                        link: '/os/linux/popd/'
                    },
                    {
                        label: 'printenv',
                        link: '/os/linux/printenv/'
                    },
                    {
                        label: 'printf',
                        link: '/os/linux/printf/'
                    },
                    {
                        label: 'ps',
                        link: '/os/linux/ps/'
                    },
                    {
                        label: 'pstree',
                        link: '/os/linux/pstree/'
                    },
                    {
                        label: 'pushd',
                        link: '/os/linux/pushd/'
                    },
                    {
                        label: 'pv',
                        link: '/os/linux/pv/'
                    },
                    {
                        label: 'pwd',
                        link: '/os/linux/pwd/'
                    },
                    {
                        label: 'quota',
                        link: '/os/linux/quota/'
                    },
                    {
                        label: 'rcp',
                        link: '/os/linux/rcp/'
                    },
                    {
                        label: 'readelf',
                        link: '/os/linux/readelf/'
                    },
                    {
                        label: 'readlink',
                        link: '/os/linux/readlink/'
                    },
                    {
                        label: 'rename',
                        link: '/os/linux/rename/'
                    },
                    {
                        label: 'renice',
                        link: '/os/linux/renice/'
                    },
                    {
                        label: 'rev',
                        link: '/os/linux/rev/'
                    },
                    {
                        label: 'ripole',
                        link: '/os/linux/ripole/'
                    },
                    {
                        label: 'rlogin',
                        link: '/os/linux/rlogin/'
                    },
                    {
                        label: 'rm',
                        link: '/os/linux/rm/'
                    },
                    {
                        label: 'rmdir',
                        link: '/os/linux/rmdir/'
                    },
                    {
                        label: 'rmmod',
                        link: '/os/linux/rmmod/'
                    },
                    {
                        label: 'route',
                        link: '/os/linux/route/'
                    },
                    {
                        label: 'rsh',
                        link: '/os/linux/rsh/'
                    },
                    {
                        label: 'rsync',
                        link: '/os/linux/rsync/'
                    },
                    {
                        label: 'scp',
                        link: '/os/linux/scp/'
                    },
                    {
                        label: 'screen',
                        link: '/os/linux/screen/'
                    },
                    {
                        label: 'script',
                        link: '/os/linux/script/'
                    },
                    {
                        label: 'sdel',
                        link: '/os/linux/sdel/'
                    },
                    {
                        label: 'sed',
                        link: '/os/linux/sed/'
                    },
                    {
                        label: 'select',
                        link: '/os/linux/select/'
                    },
                    {
                        label: 'seq',
                        link: '/os/linux/seq/'
                    },
                    {
                        label: 'service',
                        link: '/os/linux/service/'
                    },
                    {
                        label: 'set',
                        link: '/os/linux/set/'
                    },
                    {
                        label: 'sftp',
                        link: '/os/linux/sftp/'
                    },
                    {
                        label: 'sha1sum',
                        link: '/os/linux/sha1sum/'
                    },
                    {
                        label: 'shred',
                        link: '/os/linux/shred/'
                    },
                    {
                        label: 'shuf',
                        link: '/os/linux/shuf/'
                    },
                    {
                        label: 'sleep',
                        link: '/os/linux/sleep/'
                    },
                    {
                        label: 'socat',
                        link: '/os/linux/socat/'
                    },
                    {
                        label: 'sort',
                        link: '/os/linux/sort/'
                    },
                    {
                        label: 'split',
                        link: '/os/linux/split/'
                    },
                    {
                        label: 'ss',
                        link: '/os/linux/ss/'
                    },
                    {
                        label: 'ssh',
                        link: '/os/linux/ssh/'
                    },
                    {
                        label: 'ssh-add',
                        link: '/os/linux/ssh-add/'
                    },
                    {
                        label: 'ssh-agent',
                        link: '/os/linux/ssh-agent/'
                    },
                    {
                        label: 'ssh-copy-id',
                        link: '/os/linux/ssh-copy-id/'
                    },
                    {
                        label: 'ssh-keygen',
                        link: '/os/linux/ssh-keygen/'
                    },
                    {
                        label: 'sshd',
                        link: '/os/linux/sshd/'
                    },
                    {
                        label: 'sslpasswd',
                        link: '/os/linux/sslpasswd/'
                    },
                    {
                        label: 'stat',
                        link: '/os/linux/stat/'
                    },
                    {
                        label: 'strace',
                        link: '/os/linux/sstrace/'
                    },
                    {
                        label: 'strings',
                        link: '/os/linux/strings/'
                    },
                    {
                        label: 'su',
                        link: '/os/linux/su/'
                    },
                    {
                        label: 'sudo',
                        link: '/os/linux/sudo/'
                    },
                    {
                        label: 'sum',
                        link: '/os/linux/sum/'
                    },
                    {
                        label: 'suspend',
                        link: '/os/linux/suspend/'
                    },
                    {
                        label: 'sysctl',
                        link: '/os/linux/sysctl/'
                    },
                    {
                        label: 'tac',
                        link: '/os/linux/tac/'
                    },
                    {
                        label: 'tail',
                        link: '/os/linux/tail/'
                    },
                    {
                        label: 'talk',
                        link: '/os/linux/talk/'
                    },
                    {
                        label: 'tar',
                        link: '/os/linux/tar/'
                    },
                    {
                        label: 'tcp',
                        link: '/os/linux/tcp/'
                    },
                    {
                        label: 'tcpdump',
                        link: '/os/linux/tcpdump/'
                    },
                    {
                        label: 'tcpflow',
                        link: '/os/linux/tcpflow/'
                    },
                    {
                        label: 'tcpick',
                        link: '/os/linux/tcpick/'
                    },
                    {
                        label: 'tee',
                        link: '/os/linux/tee/'
                    },
                    {
                        label: 'telnet',
                        link: '/os/linux/telnet/'
                    },
                    {
                        label: 'test',
                        link: '/os/linux/test/'
                    },
                    {
                        label: 'tftp',
                        link: '/os/linux/tftp/'
                    },
                    {
                        label: 'time',
                        link: '/os/linux/time/'
                    },
                    {
                        label: 'timeout',
                        link: '/os/linux/timeout/'
                    },
                    {
                        label: 'times',
                        link: '/os/linux/times/'
                    },
                    {
                        label: 'top',
                        link: '/os/linux/top/'
                    },
                    {
                        label: 'touch',
                        link: '/os/linux/touch/'
                    },
                    {
                        label: 'tr',
                        link: '/os/linux/tr/'
                    },
                    {
                        label: 'tracepath',
                        link: '/os/linux/tracepath/'
                    },
                    {
                        label: 'traceroute',
                        link: '/os/linux/traceroute/'
                    },
                    {
                        label: 'trap',
                        link: '/os/linux/trap/'
                    },
                    {
                        label: 'tshark',
                        link: '/os/linux/tshark/'
                    },
                    {
                        label: 'tsort',
                        link: '/os/linux/tsort/'
                    },
                    {
                        label: 'tty',
                        link: '/os/linux/tty/'
                    },
                    {
                        label: 'type',
                        link: '/os/linux/type/'
                    },
                    {
                        label: 'ulimit',
                        link: '/os/linux/ulimit/'
                    },
                    {
                        label: 'umask',
                        link: '/os/linux/umask/'
                    },
                    {
                        label: 'umount',
                        link: '/os/linux/umount/'
                    },
                    {
                        label: 'unalias',
                        link: '/os/linux/unalias/'
                    },
                    {
                        label: 'uname',
                        link: '/os/linux/uname/'
                    },
                    {
                        label: 'uniq',
                        link: '/os/linux/uniq/'
                    },
                    {
                        label: 'unset',
                        link: '/os/linux/unset/'
                    },
                    {
                        label: 'unzip',
                        link: '/os/linux/unzip/'
                    },
                    {
                        label: 'uptime',
                        link: '/os/linux/uptime/'
                    },
                    {
                        label: 'useradd',
                        link: '/os/linux/useradd/'
                    },
                    {
                        label: 'userdel',
                        link: '/os/linux/userdel/'
                    },
                    {
                        label: 'usermod',
                        link: '/os/linux/usermod/'
                    },
                    {
                        label: 'users',
                        link: '/os/linux/users/'
                    },
                    {
                        label: 'uudecode',
                        link: '/os/linux/uudecode/'
                    },
                    {
                        label: 'uuencode',
                        link: '/os/linux/uuencode/'
                    },
                    {
                        label: 'valgrind',
                        link: '/os/linux/valgrind/'
                    },
                    {
                        label: 'vim',
                        link: '/os/linux/vim/'
                    },
                    {
                        label: 'visudo',
                        link: '/os/linux/visudo/'
                    },
                    {
                        label: 'w',
                        link: '/os/linux/w/'
                    },
                    {
                        label: 'wait',
                        link: '/os/linux/wait/'
                    },
                    {
                        label: 'watch',
                        link: '/os/linux/watch/'
                    },
                    {
                        label: 'wc',
                        link: '/os/linux/wc/'
                    },
                    {
                        label: 'wget',
                        link: '/os/linux/wget/'
                    },
                    {
                        label: 'whatis',
                        link: '/os/linux/whatis/'
                    },
                    {
                        label: 'whereis',
                        link: '/os/linux/whereis/'
                    },
                    {
                        label: 'which',
                        link: '/os/linux/which/'
                    },
                    {
                        label: 'while',
                        link: '/os/linux/while/'
                    },
                    {
                        label: 'who',
                        link: '/os/linux/who/'
                    },
                    {
                        label: 'whoami',
                        link: '/os/linux/whoami/'
                    },
                    {
                        label: 'whois',
                        link: '/os/linux/whois/'
                    },
                    {
                        label: 'wireshark',
                        link: '/os/linux/wireshark/'
                    },
                    {
                        label: 'write',
                        link: '/os/linux/write/'
                    },
                    {
                        label: 'yes',
                        link: '/os/linux/yes/'
                    },
                    {
                        label: 'zip',
                        link: '/os/linux/zip/'
                    },
                    {
                        label: 'zipinfo',
                        link: '/os/linux/zipinfo/'
                    }, ], },
            {
                label: 'MacOS',
                collapsed: true,
                items: [
                    {
                        label: 'afconvert',
                        link: '/os/macos/afconvert/'
                    },
                    {
                        label: 'afinfo',
                        link: '/os/macos/afinfo/'
                    },
                    {
                        label: 'afplay',
                        link: '/os/macos/afplay/'
                    },
                    {
                        label: 'airport',
                        link: '/os/macos/airport/'
                    },
                    {
                        label: 'alias',
                        link: '/os/macos/alias/'
                    },
                    {
                        label: 'alloc',
                        link: '/os/macos/alloc/'
                    },
                    {
                        label: 'apropos',
                        link: '/os/macos/apropos/'
                    },
                    {
                        label: 'asr',
                        link: '/os/macos/asr/'
                    },
                    {
                        label: 'atsutil',
                        link: '/os/macos/atsutil/'
                    },
                    {
                        label: 'automator',
                        link: '/os/macos/automator/'
                    },
                    {
                        label: 'awk',
                        link: '/os/macos/awk/'
                    },
                    {
                        label: 'basename',
                        link: '/os/macos/basename/'
                    },
                    {
                        label: 'bash',
                        link: '/os/macos/bash/'
                    },
                    {
                        label: 'bc',
                        link: '/os/macos/bc/'
                    },
                    {
                        label: 'bg',
                        link: '/os/macos/bg/'
                    },
                    {
                        label: 'bind',
                        link: '/os/macos/bind/'
                    },
                    {
                        label: 'bless',
                        link: '/os/macos/bless/'
                    },
                    {
                        label: 'break',
                        link: '/os/macos/break/'
                    },
                    {
                        label: 'brew',
                        link: '/os/macos/brew/'
                    },
                    {
                        label: 'bzip2',
                        link: '/os/macos/bzip2/'
                    },
                    {
                        label: 'caffeinate',
                        link: '/os/macos/caffeinate/'
                    },
                    {
                        label: 'cal',
                        link: '/os/macos/cal/'
                    },
                    {
                        label: 'calendar',
                        link: '/os/macos/calendar/'
                    },
                    {
                        label: 'caller',
                        link: '/os/macos/caller/'
                    },
                    {
                        label: 'cancel',
                        link: '/os/macos/cancel/'
                    },
                    {
                        label: 'case',
                        link: '/os/macos/case/'
                    },
                    {
                        label: 'cat',
                        link: '/os/macos/cat/'
                    },
                    {
                        label: 'cd',
                        link: '/os/macos/cd/'
                    },
                    {
                        label: 'chflags',
                        link: '/os/macos/chflags/'
                    },
                    {
                        label: 'chgrp',
                        link: '/os/macos/chgrp/'
                    },
                    {
                        label: 'chmod',
                        link: '/os/macos/chmod/'
                    },
                    {
                        label: 'chown',
                        link: '/os/macos/chown/'
                    },
                    {
                        label: 'chroot',
                        link: '/os/macos/chroot/'
                    },
                    {
                        label: 'chsh',
                        link: '/os/macos/chsh/'
                    },
                    {
                        label: 'cksum',
                        link: '/os/macos/cksum/'
                    },
                    {
                        label: 'clear',
                        link: '/os/macos/clear/'
                    },
                    {
                        label: 'cmp',
                        link: '/os/macos/cmp/'
                    },
                    {
                        label: 'codesign',
                        link: '/os/macos/codesign/'
                    },
                    {
                        label: 'comm',
                        link: '/os/macos/comm/'
                    },
                    {
                        label: 'command',
                        link: '/os/macos/command/'
                    },
                    {
                        label: 'complete',
                        link: '/os/macos/complete/'
                    },
                    {
                        label: 'continue',
                        link: '/os/macos/continue/'
                    },
                    {
                        label: 'cp',
                        link: '/os/macos/cp/'
                    },
                    {
                        label: 'cpio',
                        link: '/os/macos/cpio/'
                    },
                    {
                        label: 'createhomedir',
                        link: '/os/macos/createhomedir/'
                    },
                    {
                        label: 'cron',
                        link: '/os/macos/cron/'
                    },
                    {
                        label: 'crontab',
                        link: '/os/macos/crontab/'
                    },
                    {
                        label: 'csplit',
                        link: '/os/macos/csplit/'
                    },
                    {
                        label: 'csrutil',
                        link: '/os/macos/csrutil/'
                    },
                    {
                        label: 'cupsfilter',
                        link: '/os/macos/cupsfilter/'
                    },
                    {
                        label: 'curl',
                        link: '/os/macos/curl/'
                    },
                    {
                        label: 'cut',
                        link: '/os/macos/cut/'
                    },
                    {
                        label: 'date',
                        link: '/os/macos/date/'
                    },
                    {
                        label: 'dc',
                        link: '/os/macos/dc/'
                    },
                    {
                        label: 'dd',
                        link: '/os/macos/dd/'
                    },
                    {
                        label: 'declare',
                        link: '/os/macos/declare/'
                    },
                    {
                        label: 'defaults',
                        link: '/os/macos/defaults/'
                    },
                    {
                        label: 'df',
                        link: '/os/macos/df/'
                    },
                    {
                        label: 'diff',
                        link: '/os/macos/diff/'
                    },
                    {
                        label: 'diff3',
                        link: '/os/macos/diff3/'
                    },
                    {
                        label: 'dig',
                        link: '/os/macos/dig/'
                    },
                    {
                        label: 'dirname',
                        link: '/os/macos/dirname/'
                    },
                    {
                        label: 'dirs',
                        link: '/os/macos/dirs/'
                    },
                    {
                        label: 'diskutil',
                        link: '/os/macos/diskutil/'
                    },
                    {
                        label: 'disown',
                        link: '/os/macos/disown/'
                    },
                    {
                        label: 'ditto',
                        link: '/os/macos/ditto/'
                    },
                    {
                        label: 'dot_clean',
                        link: '/os/macos/dot_clean/'
                    },
                    {
                        label: 'drutil',
                        link: '/os/macos/drutil/'
                    },
                    {
                        label: 'dscacheutil',
                        link: '/os/macos/dscacheutil/'
                    },
                    {
                        label: 'dseditgroup',
                        link: '/os/macos/dseditgroup/'
                    },
                    {
                        label: 'dsenableroot',
                        link: '/os/macos/dsenableroot/'
                    },
                    {
                        label: 'dsmemberutil',
                        link: '/os/macos/dsmemberutil/'
                    },
                    {
                        label: 'dscl',
                        link: '/os/macos/dscl/'
                    },
                    {
                        label: 'du',
                        link: '/os/macos/du/'
                    },
                    {
                        label: 'echo',
                        link: '/os/macos/echo/'
                    },
                    {
                        label: 'ed',
                        link: '/os/macos/ed/'
                    },
                    {
                        label: 'enable',
                        link: '/os/macos/enable/'
                    },
                    {
                        label: 'env',
                        link: '/os/macos/env/'
                    },
                    {
                        label: 'eval',
                        link: '/os/macos/eval/'
                    },
                    {
                        label: 'exec',
                        link: '/os/macos/exec/'
                    },
                    {
                        label: 'exit',
                        link: '/os/macos/exit/'
                    },
                    {
                        label: 'execsnoop',
                        link: '/os/macos/execsnoop/'
                    },
                    {
                        label: 'expand',
                        link: '/os/macos/expand/'
                    },
                    {
                        label: 'expect',
                        link: '/os/macos/expect/'
                    },
                    {
                        label: 'export',
                        link: '/os/macos/export/'
                    },
                    {
                        label: 'expr',
                        link: '/os/macos/expr/'
                    },
                    {
                        label: 'fc',
                        link: '/os/macos/fc/'
                    },
                    {
                        label: 'fdisk',
                        link: '/os/macos/fdisk/'
                    },
                    {
                        label: 'fdesetup',
                        link: '/os/macos/fdesetup/'
                    },
                    {
                        label: 'fg',
                        link: '/os/macos/fg/'
                    },
                    {
                        label: 'file',
                        link: '/os/macos/file/'
                    },
                    {
                        label: 'find',
                        link: '/os/macos/find/'
                    },
                    {
                        label: 'fmt',
                        link: '/os/macos/fmt/'
                    },
                    {
                        label: 'fold',
                        link: '/os/macos/fold/'
                    },
                    {
                        label: 'for',
                        link: '/os/macos/for/'
                    },
                    {
                        label: 'fsck',
                        link: '/os/macos/fsck/'
                    },
                    {
                        label: 'fs_usage',
                        link: '/os/macos/fs_usage/'
                    },
                    {
                        label: 'ftp',
                        link: '/os/macos/ftp/'
                    }, ], }, ], }, ],
  })]
});