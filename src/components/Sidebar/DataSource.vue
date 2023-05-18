<template>
  <div class="dataSource">
    <div>
      <el-divider content-position="left">定义数据连接</el-divider>
      <el-button text @click="dialogDbVisible = true" class="config"
        >配置数据库连接</el-button
      >
      <el-divider content-position="left">定义表连接</el-divider>
      <el-button text class="config">配置表连接</el-button>
    </div>
    <el-dialog
      show-close
      :close-on-click-modal="false"
      v-model="dialogDbVisible"
      title="配置数据库连接"
    >
      <el-button type="primary">测试连接</el-button>
      <!-- <el-divider content-position="left">jdbc：</el-divider> -->

      <el-form :model="form" label-width="150px">
        <el-divider content-position="left">jdbc：</el-divider>
        <!-- jdbc -->
        <el-row>
          <el-col :span="24">
            <el-form-item label="数据库：">
              <el-select
                v-model="form.dbType"
                placeholder="请选择数据库"
                style="width: 400px"
              >
                <el-option label="MySql" value="MySql" />
                <el-option label="SQLServer" value="SQLServer" />
                <el-option label="Oracle" value="Oracle" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="驱动器：">
              <el-select
                v-model="form.dbDriverName"
                placeholder="请选择驱动器"
                style="width: 400px"
              >
                <el-option label="com.mysql.jdbc.Driver" value="1" />
                <el-option
                  label="com.microsoft.sqlserver.jdbc.SQLServerDriver"
                  value="2"
                />
                <el-option label="oracle.jdbc.driver.OracleDriver" value="3" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="主机：">
              <el-input v-model="form.dbIp" class="fixWidth215" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="端口：">
              <el-input v-model="form.dbPort" class="fixWidth215" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="数据库名称：">
              <el-input v-model="form.dbName" class="fixWidth215" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户名：">
              <el-input v-model="form.dbUser" class="fixWidth215" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="密码：">
              <el-input v-model="form.dbPwd" class="fixWidth215" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="编码：">
              <el-select
                v-model="form.dbCode"
                placeholder="请选择编码"
                effect="dark"
              >
                <el-option
                  v-for="item in dbCodeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="URL：">
              <el-input
                v-model="form.dbUser"
                placeholder="jdbc:mysql://localhost:port/databaseName"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- ssh -->
        <el-divider content-position="left">SSH：</el-divider>
        <el-form-item>
          <el-checkbox v-model="isSSH">使用ssh通道</el-checkbox>
        </el-form-item>
        <el-row v-if="isSSH">
          <el-col :span="24" :offset="5">
            <el-form-item label="主机：">
              <el-input v-model="form.sshHost" value="50" class="fixWidth215" />
            </el-form-item>
          </el-col>
          <el-col :span="24" :offset="5">
            <el-form-item label="端口：">
              <el-input v-model="form.sshPort" value="22" class="fixWidth215" />
            </el-form-item>
          </el-col>
          <el-col :span="24" :offset="5">
            <el-form-item label="用户名：">
              <el-input v-model="form.sshUser" class="fixWidth215" />
            </el-form-item>
          </el-col>
          <el-col :span="24" :offset="5">
            <el-form-item label="验证方式：">
              <el-select v-model="form.sshCheck" placeholder="请选择验证方式">
                <el-option label="密码" value="1" />
                <el-option label="公钥" value="0" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24" :offset="5">
            <el-form-item label="密码：">
              <el-input v-model="form.sshPwd" class="fixWidth215" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left">高级：</el-divider>
        <!-- 高级 -->
        <el-row :gutter="20">
          <el-col :span="24" :offset="5">
            <el-form-item label="最大活动连接数：">
              <el-input v-model="form.links" value="50" class="fixWidth215" />
            </el-form-item>
          </el-col>
          <el-col :span="24" :offset="5">
            <el-form-item label="检验语句：">
              <el-input
                v-model="form.checkSql"
                placeholder="为空使用默认语句"
                class="fixWidth215"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24" :offset="5">
            <el-form-item label="获取连接前检验：">
              <el-select v-model="form.checkLink" placeholder="请选择">
                <el-option label="是" value="1" />
                <el-option label="否" value="0" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 高级end -->
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogDbVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogDbVisible = false">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
const dialogDbVisible = ref(false);
const isSSH = ref(false);
const coding = reactive({});
// do not use same name with ref
const form = reactive({
  dbType: "MySql",
  dbDriverName: "com.mysql.jdbc.Driver",
  dbIp: "",
  dbPort: "",
  dbName: "",
  dbUser: "",
  dbPwd: "",
  dbCode: "",
  sshHost: "",
  sshPort: "",
  sshUser: "",
  sshPwd: "",
  links: 50,
  checkSql: "",
  checkLink: "1",
});

let changeSSH = () => {
  console.log(isSSH.value);
  isSSH.value = !isSSH.value;
};

const dbCodeOptions = [
  {
    value: '0',
    label: '默认',
  },
  {
    value: '1',
    label: 'GBK',
  },
  {
    value: '2',
    label: 'BIG5',
  },
  {
    value: '3',
    label: 'ISO-8859-1',
  },
  {
    value: '4',
    label: 'UTF-8',
  },
  {
    value: '5',
    label: 'UTF-16',
  },
  {
    value: '6',
    label: 'EUC-JP',
  },
  {
    value: '7',
    label: 'EUC-KR',
  },
  {
    value: '8',
    label: 'CP850',
  },
]


let onSubmit = () => {
  console.log("submit!");
};
</script>

<style lang="scss" scoped>
.el-button--text {
  margin-right: 15px;
}
.config {
  color: #265dcb;
  font-size: 1.2rem;
}
.fixWidth215 {
  width: 215px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
